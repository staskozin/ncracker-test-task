import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMoviesStore = defineStore('movies', {
  state: () => {
    const selectedSort = ref('default_sort_order') // default | title | year

    const titleCheckboxChecked = ref(false)
    const yearCheckboxChecked = ref(false)
    const lastChangedCheckbox = ref(null)

    function setSort() {
      if (titleCheckboxChecked.value && yearCheckboxChecked.value) {
        if (lastChangedCheckbox.value === 'title') {
          yearCheckboxChecked.value = false
        } else {
          titleCheckboxChecked.value = false
        }
      }
      if (titleCheckboxChecked.value) selectedSort.value = 'title'
      else if (yearCheckboxChecked.value) selectedSort.value = 'year'
      else selectedSort.value = 'default_sort_order'
    }
    watch(titleCheckboxChecked, setSort)
    watch(yearCheckboxChecked, setSort)

    return {
      movies: [],
      currentMovie: null,
      loading: false,
      selectedSort,
      titleCheckboxChecked,
      yearCheckboxChecked,
      lastChangedCheckbox,
    }
  },
  getters: {
    sortedMovies(state) {
      // В зависимости от selectedSort возвращаем список фильмов
      // this.selectedSort.sort(())
      // return state.movies

      return [...state.movies].sort((a, b) => {
        if (a[state.selectedSort] > b[state.selectedSort]) return 1
        if (a[state.selectedSort] < b[state.selectedSort]) return -1
        return 0
      })
    },
  },
  actions: {
    async fetchMovies() {
      try {
        this.loading = true
        const data = await axios.get('https://mashroom-movies-api.netlify.app/api/movies')
        this.loading = false
        if (data.data.success && data.data.data !== null) {
          this.movies = data.data.data
          this.movies.forEach((v, i) => {
            v['default_sort_order'] = i // Чтобы запомнить дефолтную сортировку
          })
        } else this.movies = []
      } catch (error) {
        console.error(error)
        this.movies = []
      }
      document.title = '#MOVIENOW'
    },
    async fetchMovie(id) {
      if (this.movies.length > 0) {
        const found = this.movies.find((i) => i.id === Number.parseInt(id))
        if (found) {
          this.currentMovie = found
          document.title = this.currentMovie.title + ' — #MOVIENOW'
          return
        }
      }
      try {
        this.loading = true
        const data = await axios.get('https://mashroom-movies-api.netlify.app/api/movie/' + id)
        this.loading = false
        if (data.data.success) this.currentMovie = data.data.data
        else this.currentMovie = null
      } catch (error) {
        console.error(error)
        this.currentMovie = null
      }
      document.title =
        (this.currentMovie ? this.currentMovie.title : 'Фильм не найден') + ' — #MOVIENOW'
    },
    saveLastCheckbox(name) {
      this.lastChangedCheckbox = name
    },
  },
})

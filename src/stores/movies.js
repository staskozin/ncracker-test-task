import { defineStore } from 'pinia'
import axios from 'axios'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [],
    currentMovie: null,
    loading: false,
  }),
  actions: {
    async fetchMovies() {
      try {
        this.loading = true
        const data = await axios.get('https://mashroom-movies-api.netlify.app/api/movies')
        this.loading = false
        if (data.data.success && data.data.data !== null) this.movies = data.data.data
        else this.movies = []
      } catch (error) {
        console.error(error)
        this.movies = []
      }
    },
    async fetchMovie(id) {
      if (this.movies.length > 0) {
        const found = this.movies.find((i) => i.id === Number.parseInt(id))
        if (found) {
          this.currentMovie = found
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
    },
  },
})

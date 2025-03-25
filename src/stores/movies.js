import { defineStore } from 'pinia'
import axios from 'axios'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [],
    loading: false,
  }),
  actions: {
    async fetchMovies() {
      try {
        this.loading = true
        const data = await axios.get('https://mashroom-movies-api.netlify.app/api/movies')
        this.loading = false
        if (data.data.success) this.movies = data.data.data
        else this.movies = []
      } catch (error) {
        console.error(error)
        this.movies = []
      }
    },
  },
})

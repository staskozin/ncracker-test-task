<script setup>
import AnimatedLoader from '@/components/AnimatedLoader.vue';
import HorizontalRule from '@/components/HorizontalRule.vue';
import MovieCard from '@/components/MovieCard.vue';
import NotFound from '@/components/NotFound.vue';
import { useMoviesStore } from '@/stores/movies';

const moviesStore = useMoviesStore()
moviesStore.fetchMovies()
</script>

<template>
  <h1 class="main-header">Фильмы</h1>
  <HorizontalRule />
  <AnimatedLoader v-if="moviesStore.loading" />
  <NotFound v-else-if="moviesStore.movies.length === 0" />
  <div
    v-else
    class="cards"
  >
    <MovieCard
      v-for="m in moviesStore.movies"
      :key="m.id"
      :poster="m.poster"
      :title="m.title"
      :year="m.year"
      :description="m.description"
      :genres="m.genres"
      :directors="m.directors || []"
      :actors="m.actors || []"
      :duration="m.collapse.duration ? m.collapse.duration[0] : undefined"
      :animated-hover="true"
      :link="'/movie/' + m.id"
    />
  </div>
</template>

<style>
.main-header {
  font-weight: 500;
  font-size: 32px;
  line-height: 1;
  margin: 0 0 16px;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>

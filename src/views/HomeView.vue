<script setup>
import AnimatedLoader from '@/components/AnimatedLoader.vue';
import BaseCheckbox from '@/components/BaseCheckbox.vue';
import HorizontalRule from '@/components/HorizontalRule.vue';
import MovieCard from '@/components/MovieCard.vue';
import NotFound from '@/components/NotFound.vue';
import { useMoviesStore } from '@/stores/movies';

const moviesStore = useMoviesStore()
moviesStore.fetchMovies()
</script>

<template>
  <h1 class="main-header">Фильмы</h1>
  <div class="checkboxes">
    <BaseCheckbox
      label="Отсортировать по названию"
      name="title"
      v-model="moviesStore.titleCheckboxChecked"
    />
    <BaseCheckbox
      label="Отсортировать по году"
      name="year"
      v-model="moviesStore.yearCheckboxChecked"
    />
  </div>
  <HorizontalRule />
  <AnimatedLoader v-if="moviesStore.loading" />
  <NotFound v-else-if="moviesStore.movies.length === 0" />
  <TransitionGroup
    v-else
    tag="div"
    class="cards"
    name="list"
  >
    <MovieCard
      v-for="m in moviesStore.sortedMovies"
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
  </TransitionGroup>
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

.checkboxes {
  display: flex;
  gap: 32px;
  margin-bottom: 16px;
}

.list-move {
  transition: all .3s ease-out !important;
  transition-delay: .08s;
}
</style>

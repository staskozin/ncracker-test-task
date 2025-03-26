<script setup>
import HorizontalRule from '@/components/HorizontalRule.vue';
import IconArrow from '@/components/icons/IconArrow.vue';
import MovieCard from '@/components/MovieCard.vue';
import { useMoviesStore } from '@/stores/movies';
import { RouterLink, useRoute } from 'vue-router';
const route = useRoute()
const moviesStore = useMoviesStore()
moviesStore.fetchMovie(route.params.id)
</script>

<template>
  <RouterLink
    to="/"
    class="backlink"
  >
    <IconArrow />
    Назад к списку
  </RouterLink>
  <HorizontalRule />
  <MovieCard
    v-if="moviesStore.currentMovie"
    :key="moviesStore.currentMovie.id"
    :poster="moviesStore.currentMovie.poster"
    :title="moviesStore.currentMovie.title"
    :year="moviesStore.currentMovie.year"
    :description="moviesStore.currentMovie.description"
    :genres="moviesStore.currentMovie.genres"
    :directors="moviesStore.currentMovie.directors || []"
    :actors="moviesStore.currentMovie.actors || []"
    :duration="moviesStore.currentMovie.collapse.duration ? moviesStore.currentMovie.collapse.duration[0] : undefined"
  />
</template>

<style>
.backlink {
  display: flex;
  color: var(--accent-light-color);
  font-size: 20px;
  line-height: 1;
  gap: 8px;
  align-items: center;
  text-decoration-skip-ink: none;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  margin-bottom: 20px;
}
</style>

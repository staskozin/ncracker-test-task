<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue';
</script>

<template>
  <PageHeader />

    <nav>
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/movie">Фильм</RouterLink>
    </nav>
  <RouterView />
</template>

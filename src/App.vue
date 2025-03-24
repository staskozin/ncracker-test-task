<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue';
</script>

<template>
  <PageHeader />

  <div class="container">
    <nav>
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/movie">Фильм</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1400px;
  margin: 0 auto;
}
</style>

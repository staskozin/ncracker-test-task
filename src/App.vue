<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/movie">Фильм</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

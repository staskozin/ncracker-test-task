<script setup>
import { RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue';
</script>

<template>
  <PageHeader />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1400px;
  margin: 40px auto 0;
}
</style>

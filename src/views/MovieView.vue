<script setup>
import HorizontalRule from '@/components/HorizontalRule.vue';
import IconArrow from '@/components/icons/IconArrow.vue';
import { RouterLink } from 'vue-router';
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

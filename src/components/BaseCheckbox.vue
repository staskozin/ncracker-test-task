<script setup>
import { useMoviesStore } from '@/stores/movies';
import IconCheckbox from './icons/IconCheckbox.vue';
import IconCheckboxChecked from './icons/IconCheckboxChecked.vue';

const moviesStore = useMoviesStore()

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const model = defineModel({
  set(value) {
    moviesStore.saveLastCheckbox(props.name)
    return value
  }
})
</script>

<template>
  <label class="checkbox">
    <IconCheckboxChecked v-if="model" />
    <IconCheckbox v-else />
    <input
      class="checkbox__input"
      type="checkbox"
      v-model="model"
    >
    <span>{{ props.label }}</span>
  </label>

</template>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--card-ribbon-color);
  font-size: 16px;
  line-height: 1;
  cursor: pointer;

  &__input {
    display: none;
  }
}
</style>

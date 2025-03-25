<script setup>
import IconFilm from './icons/IconFilm.vue';

const props = defineProps({
  poster: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  genres: {
    type: Object,
    required: true
  },
  directors: {
    type: Array,
    required: true
  },
  actors: {
    type: Array,
    required: true
  },
  description: {
    type: String
  },
  duration: {
    type: String
  },
  animatedHover: {
    type: Boolean,
    default: false
  },
  link: {
    type: String
  }
})
</script>

<template>
  <div :class="'card ' + (props.animatedHover ? 'animated' : '')">
    <RouterLink
      v-if="props.link"
      :to="props.link"
      class="card__left"
    >
      <img
        class="poster"
        :src="props.poster"
        :alt="props.title"
      >
    </RouterLink>
    <div
      v-else
      class="card__left"
    >
      <img
        class="poster"
        :src="props.poster"
        :alt="props.title"
      >
    </div>
    <div>
      <div class="card__top">
        <RouterLink
          v-if="props.link"
          :to="props.link"
          class="titlelink"
        >
          <h2 class="title">{{ props.title }}</h2>
        </RouterLink>
        <h2
          v-else
          class="title"
        >{{ props.title }}</h2>
        <div
          v-if="props.duration"
          class="duration-wrap"
        >
          <div class="duration">
            <span>{{ props.duration.replaceAll(' ', '\u00A0') }}</span>
            <IconFilm />
          </div>
        </div>
      </div>
      <span class="metatext">{{ props.year }}, {{ props.genres.join(', ') }}</span>
      <span class="metatext">Режиссёр: {{ props.directors.join(', ') }}</span>
      <div class="actors-wrap">
        <span class="metatext">Актёры:</span>
        <span class="actors">{{ props.actors.join(', ') }}</span>
      </div>
      <p class="description">{{ props.description }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  background-color: var(--card-background-color);
  display: flex;
  align-items: center;
  gap: 24px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform .2s, box-shadow .4s;

  &.animated:hover {
    transform: translateY(-8px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
  }

  &__left {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    min-width: 168px;
    background-color: var(--card-ribbon-color);
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
}

.poster {
  width: 112px;
}

.title {
  font-size: 36px;
  line-height: 1;
  font-weight: bold;
  margin: 32px 0 12px;
}

.titlelink {
  color: inherit;
  text-decoration: none;
  display: block;
  width: 100%;
}

.metatext {
  font-size: 12px;
  line-height: 1;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--card-info-color);
  display: block;
  margin-bottom: 8px;
}

.actors-wrap {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.actors {
  font-size: 12px;
  line-height: 16px;
  color: var(--card-actors-color);
}

.description {
  font-size: 16px;
  line-height: 20px;
  margin: 16px 0 32px;
}

.duration-wrap {
  background-color: var(--card-ribbon-color);
  padding: 3px 30px 3px 16px;
  transform: skewX(-11.3deg);
  color: var(--black-text-color);
  margin-top: 15px;
  margin-right: -5px;
  font-size: 12px;
  line-height: 1;
  font-weight: bold;
  text-transform: uppercase;
}

.duration {
  display: flex;
  align-items: center;
  gap: 8px;
  transform: skewX(11.3deg);
}
</style>

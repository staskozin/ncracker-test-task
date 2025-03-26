<template>
  <div class="animated-loader">
    <div class="animated-loader__outer"></div>
    <div class="animated-loader__inner"></div>
  </div>
</template>

<style scoped lang="scss">
@mixin circle-border {
  border-width: 3px;
  border-style: solid;
  border-radius: 50%;
}

.animated-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;

  &__outer {
    @include circle-border;
    border-color: var(--black-text-color) var(--black-text-color) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
    width: 95px;
    height: 95px;
    animation: 3s linear 0s infinite reverse spin;
  }

  &__inner {
    @include circle-border;
    border-color: var(--accent-color) var(--accent-color) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
    position: absolute;
    width: 70px;
    height: 70px;
    animation: 2s linear 0s infinite spin;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>

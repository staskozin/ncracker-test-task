<template>
  <header class="header">
    <span class="header__text">#MOVIENOW</span>
  </header>
</template>

<style scoped lang="scss">
.header {
  text-align: center;
  background-color: var(--accent-color);
  color: var(--black-text-color);
  box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.28);
  padding: 36px 0 16px;
  position: sticky;
  top: 0;
  z-index: 1;

  &__text {
    display: block;
    font-size: 48px;
    line-height: 1;
    font-weight: bold;
    letter-spacing: 0.21em;
  }
}
</style>

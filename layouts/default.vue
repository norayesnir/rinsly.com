<template>
  <div class="app">
    <NavigationMenu />
    <div class="page-container">
      <div class="page">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
  position: relative;

  .navigation-container {
    position: fixed;
    top: 0;
    width: 100%;
  }

  .page-container {
    max-width: calc(1200px - 32px);
    margin: 0 auto;
    padding: 80px 16px 0;

    .page {
      margin-top: 32px;
    }
  }
}
</style>

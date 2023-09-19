<template>
  <nav class="routes">Navigation</nav>
</template>

<script setup lang="ts">
import { useNavigationMenuStore } from "~/stores/navigationMenuStore";
</script>

<style scoped lang="scss">
.routes {
  position: sticky;
  padding: 32px 16px;

  .route {
    padding: 0px 10px;
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 400;

    &:hover {
      opacity: 0.8;
    }
  }
}

.router-link-active {
  font-weight: 800;
}

@media screen and (max-width: 750px) {
}
</style>

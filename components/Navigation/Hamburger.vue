<template>
  <div @click="navigationMenu.toggleNavigation" class="appearance">
    <Icon
      v-if="!navigationMenu.navigationState"
      name="ic:baseline-menu"
      size="24"
    />
    <Icon v-else name="ic:outline-close" size="24" />
  </div>
</template>

<script setup lang="ts">
import { useNavigationMenuStore } from "~/stores/navigationMenuStore";

const navigationMenu = useNavigationMenuStore();
</script>

<style scoped lang="scss">
.icon {
  color: var(--foreground);
}
</style>

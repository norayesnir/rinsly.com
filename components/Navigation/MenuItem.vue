<template>
  <ul class="menu-item">
    <div class="main-route" @click="navigationMenu.toggleMenuItem">
      <NuxtLink v-if="data.children && !data.children.length" class="route" :to="data.link_to_page">
        <img :src="data.icon.url" :alt="data.icon._id" v-if="data.icon" />
        {{ data.title }}
      </NuxtLink>

      <div v-else>{{ data.title }}</div>

      <Icon v-if="data.children && data.children.length" name="material-symbols:arrow-forward-ios" size="12" class="icon"
        :class="{ 'icon__active': navigationMenu.menuItemState }" />
    </div>
    <div class="menu-items" :class="{ 'menu-items__active': navigationMenu.menuItemState }" v-if="data.children">
      <slot />
    </div>
  </ul>
</template>

<script setup lang="ts">
// Parent Component __typename data
const props = defineProps(["data"]);
const data = computed(() => props.data);

// Store
import { useNavigationMenuStore } from "~/stores/navigationMenuStore";
const navigationMenu = useNavigationMenuStore();
</script>

<style scoped lang="scss">
.menu-item {
  display: flex;
  flex-direction: column;
  height: fit-content;
}

.main-route {
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;
}

.route {
  height: fit-content;

  &:hover {
    opacity: 0.8;
  }
}

.menu-items {
  display: none;
  visibility: hidden;

  font-size: smaller;

  div {
    margin-top: 8px;
  }
}

.menu-items__active {
  display: inherit;
  visibility: visible;
}

.icon {
  transition: .2s ease;
}

.icon__active {
  rotate: 90deg;
}
</style>
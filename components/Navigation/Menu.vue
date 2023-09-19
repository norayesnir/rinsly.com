<template>
  <div
    class="navigation-container"
    :class="{ 'navigation-active': navigationMenu.navigationState }"
  >
    <div class="navigation-menu">
      <NuxtLink to="/">
        <AppLogo />
      </NuxtLink>
      <div class="right-side">
        <div class="desktop-routes"></div>
        <SettingsAppearance />

        <div class="navigation-hamburger">
          <NavigationHamburger />
        </div>
      </div>
    </div>
    <NavigationRoute v-if="navigationMenu.navigationState" />
  </div>
</template>

<script setup lang="ts">
import { useNavigationMenuStore } from "~/stores/navigationMenuStore";

const navigationMenu = useNavigationMenuStore();
</script>

<style scoped lang="scss">
.navigation-container {
  background-color: var(--background-blur);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px var(--border) solid;

  .navigation-menu {
    max-width: calc(1200px - 32px);
    margin: 0 auto;

    padding: 16px 16px;
    display: flex;
    justify-content: space-between;

    .right-side {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 32px;

      @media screen and (max-width: 750px) {
        .desktop-routes {
          visibility: hidden;
          display: none;
        }
      }

      @media screen and (min-width: 750px) {
        .navigation-hamburger {
          visibility: hidden;
          display: none;
        }
      }
    }
  }
}

.navigation-active {
  height: 100%;
}
</style>

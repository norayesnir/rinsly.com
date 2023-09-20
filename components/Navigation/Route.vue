<template>
  <ul class="routes">
    <component v-for="element in item.menu_items" :key="element._id" :is="getComponent(element.__typename)"
      :data="element">

      <div class="child" v-if="element.children">
        <component v-for="childElement in element.children" :key="childElement._id"
          :is="getComponent(childElement.__typename)" :data="childElement">
        </component>
      </div>
    </component>
  </ul>
</template>

<script setup lang="ts">
import { GetNavigationMenu } from "~/queries/navigation/get-navigation-menu";
const { data, error } = await useAsyncQuery(GetNavigationMenu);

// @ts-ignore-next-line
const item = data.value.Navigation;

// Import the components
import MenuItem from "@/components/Navigation/MenuItem.vue";

// Set up the components
const components = [{ title: "MenuItem", comp: MenuItem }];

// Assign the components for the stack loop above
// @ts-ignore-next-line
const getComponent = (title) => {
  const component = components.find((component) => component.title === title);
  return component ? component.comp : null;
};
</script>

<style scoped lang="scss">
.routes {
  position: sticky;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: fit-content;

  padding: 0 16px;
}

@media screen and (min-width: 750px) {
  .routes {
    flex-direction: row;
  }
}
</style>

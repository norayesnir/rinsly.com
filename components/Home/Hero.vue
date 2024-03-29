<template>
  <div class="hero">
    <div class="content">
      <h1 class="title" v-html="hero.title"></h1>
      <p class="desc">{{ hero.description }}</p>
      <div class="buttons">
        <component
          v-for="element in buttons"
          :key="element._id"
          :is="getComponent(element.__typename)"
          :data="element"
        >
        </component>
      </div>
    </div>
    <div class="frame">
      <img :src="img.url" :alt="img._id" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

import { GetHero } from "~/queries/home/get-hero";
const { data } = await useAsyncQuery(GetHero);
const hero = data.value.HomepageHero;
const img = hero.image;

// Import the components
import Button from "@/components/App/Button";

// Set up the components
const components = [{ name: "Button", comp: Button }];

// Assign the components for the stack loop above
const getComponent = (name) => {
  const component = components.find((component) => component.name === name);
  return component ? component.comp : null;
};

const page = data.value.HomepageHero;
const buttons = computed(() => {
  return page.buttons;
});
</script>

<style scoped lang="scss">
.hero {
  height: calc(100vh - 97px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  .content {
    margin: auto 0;
    max-width: 425px;

    .title {
      font-size: 48px;
      line-height: 100%;
      font-weight: 100;
      margin: 0;
    }

    .desc {
      color: var(--description);
    }

    .buttons {
      display: inline-flex;
      gap: 16px;
    }
  }

  .frame {
    width: 100%;

    // ON MOBILE >750
    display: none;
    visibility: hidden;

    .image {
      width: 100%;
    }
  }
}

@media screen and (min-width: 750px) {
  .hero {
    flex-wrap: nowrap;

    .frame {
      display: inherit;
      visibility: visible;
    }
  }
}

video {
  z-index: 10;
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>

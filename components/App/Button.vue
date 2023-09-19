<template>
  <NuxtLink class="button" :class="kebabify(data.color)">
    <span>{{ data.name }}</span>
    <Icon name="ic:baseline-arrow-forward" class="icon" />
  </NuxtLink>
</template>

<script setup>
import { computed } from "vue";
import { kebabify } from "~/helps/kebabify";

const props = defineProps(["data"]);
const data = computed(() => props.data);
</script>

<style scoped lang="scss">
.button {
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 5px;

  &:hover {
    opacity: 0.75;
  }

  span {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  .icon {
    width: 12px;
    color: white;
  }
}

.torch-red {
  background-color: var(--torch-red);
}

.malibu {
  background-color: var(--malibu);
}

.denim {
  background-color: var(--denim);
}

.baltic-sea {
  background-color: var(--baltic-sea);
}

.studio {
  background-color: var(--studio);
}

.no-color {
  span {
    color: var(--foreground);
  }

  .icon {
    color: var(--foreground);
  }
}
</style>

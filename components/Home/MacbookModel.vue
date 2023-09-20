<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";

const { scene, nodes, animations, materials } = await useGLTF(
  "/models/macbook.gltf",
  { draco: true }
);
</script>

<template>
  <div class="scene">
    <primitive :object="scene" />
  </div>
</template>

<style scoped lang="scss">
.scene {
  z-index: -99;
}
</style>

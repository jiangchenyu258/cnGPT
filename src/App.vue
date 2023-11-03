<script setup lang="ts">
import { ref } from "vue";
import Index from "./Index.vue";

const isMobile = ref(true);
</script>

<template>
  <router-view v-if="isMobile"></router-view>
  <div v-else class="main-page">
    <Index></Index>
  </div>
</template>

<style scoped>
.main-page {
  width: 100vw;
  height: 100vh;
}
</style>

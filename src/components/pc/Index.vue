<template>
  <div class="index-page">
    <MenuView></MenuView>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import MenuView from "../Menu.vue";
</script>
<style scoped>
.index-page {
  display: flex;
  width: 100vw;
  height: 100vh;
}
</style>

<template>
  <div class="index-page">
    <MenuView></MenuView>
    <Chat></Chat>
  </div>
</template>
<script setup lang="ts">
import MenuView from "./components/Menu.vue";
import Chat from "./components/Chat.vue";
</script>
<style scoped>
.index-page {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
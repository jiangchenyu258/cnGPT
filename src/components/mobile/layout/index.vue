<template>
  <section class="page">
    <!-- side menu -->
    <side-menu v-if="$route.meta.sideMenu"></side-menu>
    <!-- main -->
    <main class="main">
      <top-header v-if="$route.meta.topHeader"></top-header>
      <router-view></router-view>
    </main>
  </section>
</template>

<script setup lang="ts">
import SideMenu from "./components/menu.vue";
import TopHeader from "./components/header.vue";
</script>

<style scoped>
.page {
  font-weight: 400;
  color: #ffffff;
  list-style: none;
  --font-color: #ffffff;
  --background-color: #000000;
  --border-color: #4c4c4c;
  --transition: 250ms;
}

.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: var(--background-color);
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  transition: var(--transition);
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>

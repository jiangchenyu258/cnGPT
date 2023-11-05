<template>
  <!-- side menu -->
  <side class="side">
    <ul class="side-menu">
      <li
        v-for="item in menuList"
        :key="item.id"
        class="side-menu-item"
        :class="{ 'is-active': current === item.id }"
        @click="onchange(item)"
      >
        <img :src="getAssetsFile(item.src)" width="24" height="22" />
      </li>
    </ul>
  </side>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, reactive, onMounted } from "vue";
import { getAssetsFile } from "@/assets/utils/file";
//
interface Menu {
  id: number;
  src: string;
  url: string;
}
//
const route = useRoute();
const router = useRouter();
//
const current = ref<number | undefined>(undefined);
//
const menuList = reactive<Menu[]>([
  { id: 1, src: "/src/assets/mobile/menu-history.png", url: "/history" },
  { id: 2, src: "/src/assets/mobile/menu-image.png", url: "/image" },
  { id: 3, src: "/src/assets/mobile/menu-bill.png", url: "/bill" },
]);
// 菜单切换
const onchange = (prop: Menu) => {
  let { id, url } = prop;
  current.value = id;
  router.push(url);
};
// onMounted
onMounted(() => {
  let { path } = route;
  current.value = menuList.find((item) => item.url === path)?.id;
});
</script>

<style scoped>
.side {
  /* --background-color: #000000; */
  /* --border-color: #4c4c4c; */
}
.side {
  width: 60px;
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 60px;
}

.side-menu-item {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  background-color: transparent;
  transition: var(--transition);
  background-color: var(--background-color);
}
.side-menu-item.is-active {
  --background-color: #0d45a1;
}
</style>

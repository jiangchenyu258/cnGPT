<template>
  <!-- top header -->
  <header class="header">
    <section class="back-button" @click="onback">
      <span>返回当前对话</span>
      <img
        :src="getAssetsFile('/src/assets/mobile/menu-back.png')"
        width="14"
        height="14"
      />
    </section>
  </header>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { getAssetsFile } from "@/assets/utils/file";
//
const router = useRouter();
// 返回
const onback = () => {
  router.push("/chat");
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: end;
  padding: 16px 20px;
  flex-shrink: 0;
}
.header .back-button {
  font-size: 12px;
  color: #ffffff;
  display: flex;
  align-items: center;
}
.header .back-button span {
  margin-right: 12px;
}
</style>

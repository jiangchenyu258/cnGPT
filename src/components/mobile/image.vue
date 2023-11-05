<template>
  <section class="image">
    <div class="jjj-button-group" style="margin-bottom: 16px">
      <div
        class="jjj-button"
        :class="{ 'is-active': current === 0 }"
        @click="onButtonChange(0)"
      >
        <img
          v-if="current === 0"
          class="jjj-button_left-icon"
          src="../../assets/mobile/set_b.png"
          width="14"
        />
        <img
          v-else
          class="jjj-button_left-icon"
          src="../../assets/mobile/set_a.png"
          width="14"
        />
        <span class="jjj-button_text">绘图设置</span>
      </div>
      <div
        class="jjj-button"
        :class="{ 'is-active': current === 1 }"
        @click="onButtonChange(1)"
      >
        <img
          v-if="current === 1"
          class="jjj-button_left-icon"
          src="../../assets/mobile/draw_b.png"
          width="14"
        />
        <img
          v-else
          class="jjj-button_left-icon"
          src="../../assets/mobile/draw_a.png"
          width="14"
        />
        <span class="jjj-button_text">开始绘图</span>
      </div>
    </div>
    <!--  -->
    <image-set v-if="current === 0"></image-set>
    <image-draw v-else></image-draw>
    <!--  -->
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import ImageSet from "./image/set.vue";
import ImageDraw from "./image/draw.vue";
import { getAssetsFile } from "@/assets/utils/file";
//
const current = ref(0);

// 头部button切换
const onButtonChange = (prop) => {
  current.value = prop;
};

onMounted(() => {
  document.body.setAttribute("arco-theme", "dark");
});
</script>

<style scoped>
.image {
  flex: 1;
  overflow-y: auto;
  padding: 0 20px 16px;
}
.jjj-button-group {
  --font-color: #949494;
  --bg-color: #181818;
  --bg-active-color: #3c3c3c;
  --border-color: #3c3c3c;
}
.jjj-button-group {
  display: flex;
}

.jjj-button {
  z-index: 2;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  transition: 250ms;
  background-color: var(--bg-color);
}

.jjj-button.is-active {
  --font-color: #ffffff;
  --bg-color: #3c3c3c;
  background-color: var(--bg-color);
}

.jjj-button:first-child {
  border-top: 1px solid #3c3c3c;
  border-bottom: 1px solid #3c3c3c;
  border-left: 1px solid #3c3c3c;
  border-radius: 8px 0px 0px 8px;
}
.jjj-button:last-child {
  border-top: 1px solid #3c3c3c;
  border-bottom: 1px solid #3c3c3c;
  border-left: 1px solid #3c3c3c;
  border-radius: 0 8px 8px 0;
}
.jjj-button_left-icon,
.jjj-button_right-icon {
  display: block;
}
.jjj-button_text {
  font-size: 12px;
  line-height: 12px;
  color: var(--font-color);
  margin: 0 8px;
}
</style>

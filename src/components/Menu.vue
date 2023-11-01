<template>
  <div class="menu-demo">
    <div
      class="image-container"
      :class="{ active: key === 0 }"
      @click="clickHandle(0)"
    >
      <img src="../assets/image/01.png" class="icon-image" />
    </div>
    <div
      class="image-container"
      :class="{ active: key === 1 }"
      @click="clickHandle(1)"
    >
      <img src="../assets/image/02.png" class="icon-image" />
    </div>
    <div
      class="image-container"
      :class="{ active: key === 2 }"
      @click="clickHandle(2)"
    >
      <img src="../assets/image/03.png" class="icon-image" />
    </div>
    <div class="image-container exit-icon">
      <img src="../assets/image/04.png" class="icon-image" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const key = ref(0);

const clickHandle = (keyNumber: number) => {
  key.value = keyNumber;
};
</script>
<style scoped>
.menu-demo {
  position: relative;
  box-sizing: border-box;
  width: 121px;
  height: 100%;
  background-color: #111b2e;
  text-align: center;
  padding-top: 30px;
}
.image-container {
  position: relative;
  width: 76px;
  height: 76px;
  margin: 40px auto;
  line-height: 76px;
  cursor: pointer;
}
.icon-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.active {
  background-color: #1c64dc;
  border-radius: 10px;
}
.exit-icon {
  position: absolute;
  left: 30px;
  bottom: 87px;
}
</style>

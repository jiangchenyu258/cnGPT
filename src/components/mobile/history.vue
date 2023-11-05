<template>
  <section class="history">
    <!-- button -->
    <section class="history-add-button" @click="onadd">
      <section>
        <section
          style="
            width: 12px;
            height: 1px;
            background-color: #ffffff;
            transform: rotate(90deg);
          "
        ></section>
        <section
          style="
            width: 12px;
            height: 1px;
            background-color: #ffffff;
            transform: translateY(-1px);
          "
        ></section>
      </section>
      <span>新建对话</span>
    </section>
    <!-- list -->
    <ul class="history-list">
      <li
        class="history-item"
        v-for="(item, index) in historyList"
        :key="item.id"
      >
        <img
          :src="getAssetsFile('/src/assets/mobile/history-chat.png')"
          width="14"
          height="14"
        />
        <span>
          {{ item.name }}
        </span>
        <section class="ondelete" @click="ondelete(index, item)">
          <img
            :src="getAssetsFile('/src/assets/mobile/history-delete.png')"
            width="14"
            height="14"
          />
        </section>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { h, ref, reactive } from "vue";

import { getAssetsFile } from "@/assets/utils/file";
//
const data = [
  { id: 1, name: "谁是全民制作人" },
  { id: 2, name: "为什么要练习时长两年半" },
  { id: 3, name: "喜欢唱、跳、rap、篮球，猜一动物" },
];

//
const historyList = ref([{ id: 4, name: "iKUN制作指南" }]);

// 新增
const onadd = () => {
  historyList.value.push(data[Math.floor(Math.random() * 2)]);
};
// 删除
const ondelete = (index, prop) => {
  historyList.value.splice(index, 1);
};
</script>

<!-- <script lang="ts">
export default {
  name: "ChatHistory",
};
</script> -->

<style scoped>
.history {
  flex: 1;
  overflow-y: auto;
  padding: 0 20px 16px;
}

.history-add-button {
  width: 100%;
  height: 35px;
  background: #131313;
  border: 1px solid #7a7a7a;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.history-add-button span {
  font-size: 12px;
  font-weight: 300;
  margin-left: 10px;
}
.history-list {
  padding: 12px 0;
}
.history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color);
}
.history-item span {
  margin: 0 12px;
  text-align: left;
  flex: 1;
}
</style>

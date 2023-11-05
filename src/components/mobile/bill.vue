<template>
  <section class="bill">
    <!-- button -->
    <section class="bill-token" @click="onadd">
      <section class="record-list">
        <section class="record-item">
          <p>
            <span>5.21 k Tokens</span>
          </p>
          <p>
            <span>Token 消耗</span>
          </p>
        </section>
        <section class="record-item">
          <p>
            <span>5.21 k Tokens</span>
          </p>
          <p>
            <span>Token 余耗</span>
          </p>
        </section>
      </section>
      <section class="record-button">
        <img
          :src="getAssetsFile('/src/assets/mobile/bill-money.png')"
          width="14"
          height="14"
        />
        <span>充值Tokens</span>
      </section>
    </section>
    <!--  -->
    <section class="bill-tab">
      <span :class="{ 'is-active': current === 1 }" @click="onTabChange(1)"
        >消费记录</span
      >
      <section class="line"></section>
      <span :class="{ 'is-active': current === 2 }" @click="onTabChange(2)"
        >充值记录</span
      >
    </section>
    <!-- list -->
    <section class="bill-list">
      <section class="title">
        <span>消耗原因</span>
        <span>消耗时间</span>
        <span>结算Token</span>
      </section>
      <ul class="list">
        <li class="item" v-for="(item, index) in billList" :key="item.id">
          <span>
            {{ item.name }}
          </span>
          <span>
            {{ item.time }}
          </span>
          <span>
            {{ item.number }}
          </span>
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup>
import { h, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { getAssetsFile } from "@/assets/utils/file";
//
const router = useRouter();
//
const current = ref(1);
//
const billList = ref([
  { id: 1, name: "对话消耗", time: "2023-09-22 14:45:12", number: "-31" },
  { id: 2, name: "对话消耗", time: "2023-09-22 14:45:12", number: "-31" },
  { id: 3, name: "对话消耗", time: "2023-09-22 14:45:12", number: "-31" },
]);

// 返回
const onTabChange = (prop) => {
  current.value = prop;
  console.log(current.value);
};
</script>

<!-- <script lang="ts">
export default {
  name: "Chatbill",
};
</script> -->

<style scoped>
.bill {
  flex: 1;
  overflow-y: auto;
  padding: 0 20px 16px;
}

.bill-token {
  user-select: none;
  width: 100%;
  /* height: 35px; */
  background: #131313;
  border: 1px solid #7a7a7a;
  border-radius: 8px;
  padding: 16px 24px;
}
.record-list {
  display: flex;
  margin-bottom: 16px;
}
.record-item {
  flex: 1;
  text-align: center;
}
.record-item p:first-of-type span {
  font-size: 14px;
  font-weight: bold;
}
.record-item p:last-of-type span {
  font-size: 10px;
}
.record-button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 4px;
  background-color: #0d45a1;
}
.record-button span {
  font-size: 10px;
  font-weight: 300;
  margin-left: 10px;
}

.bill-tab {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
}
.bill-tab .line {
  width: 1px;
  height: 10px;
  background: #ffffff;
  margin: 0 16px;
}
.bill-tab span {
  --font-color: #5d5d5d;
  font-size: 12px;
  font-weight: 300;
  color: var(--font-color);
  transition: var(--transition);
}
.bill-tab span.is-active {
  --font-color: #fff;
  position: relative;
}
.bill-tab .is-active::after {
  content: "";
  width: 40%;
  height: 2px;
  background-color: #fff;
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
}

.bill-list {
}
.bill-list .title {
  font-size: 10px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #323232;
  border-radius: 4px;
}
.bill-list .title span {
  flex: 1;
}
.bill-list .title span:nth-of-type(1) {
  text-align: left;
}
.bill-list .title span:nth-of-type(2) {
  flex: 2;
  margin: 0 12px;
}
.bill-list .title span:nth-of-type(3) {
  text-align: right;
}
.bill-list .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color);
}
.bill-list .item span {
  flex: 1;
  font-size: 10px;
  text-align: center;
}
.bill-list .item span:nth-of-type(2) {
  flex: 2;
  margin: 0 12px;
}
</style>

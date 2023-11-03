<template>
  <div class="recharge-record">
    <p class="recharge-title">充值与记录</p>
    <div class="top-info">
      <div class="taken-token">
        <span class="taken-title">Token消耗：</span>
        <span class="taken-result">5.21k Token</span>
      </div>
      <div class="taken-token">
        <span class="taken-title">Token余额：</span>
        <span class="taken-result">4.79k Token</span>
      </div>
      <div class="recharge-button">
        <div class="recharge-icon"></div>
        充值token
      </div>
    </div>
    <div class="board-container">
      <div class="switch-board">
        <div
          class="taken-record"
          :class="{ 'text-active': recordKey === 0 }"
          @click="clickHandle(0)"
        >
          消耗记录
          <div
            class="bottom-beacon"
            :class="{ 'beacon-active': recordKey === 0 }"
          ></div>
        </div>
        <div
          class="recharge-record-title"
          :class="{ 'text-active': recordKey === 1 }"
          @click="clickHandle(1)"
        >
          充值记录
          <div
            class="bottom-beacon"
            :class="{ 'beacon-active': recordKey === 1 }"
          ></div>
        </div>
      </div>
      <a-table :columns="columns" :data="data" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { get } from "../request/http";

get("/api/token/package/list").then((res) => {
  console.log(res);
});
const recordKey = ref(0);

const columns = [
  {
    title: "消耗原因",
    dataIndex: "takenReason",
  },
  {
    title: "消耗时间",
    dataIndex: "takenTime",
  },
  {
    title: "结算 token",
    dataIndex: "assumptionToken",
  },
];

const data = reactive([
  {
    key: "1",
    takenReason: "对话消耗",
    takenTime: "2023-09-22 14:55:42",
    assumptionToken: -352,
  },
  {
    key: "2",
    takenReason: "对话消耗",
    takenTime: "2023-09-22 14:55:42",
    assumptionToken: -352,
  },
  {
    key: "3",
    takenReason: "对话消耗",
    takenTime: "2023-09-22 14:55:42",
    assumptionToken: -352,
  },
]);

const clickHandle = (key: number) => {
  recordKey.value = key;
};
</script>

<style scoped>
.recharge-record {
  width: 100%;
  height: 100%;
  padding: 0 72px;
}
.recharge-title {
  font-size: 30px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #000000;
}
.top-info {
  display: flex;
  height: 57px;
  justify-content: space-between;
}
.taken-title {
  font-size: 18px;
  font-weight: 300;
  color: #000000;
  vertical-align: text-bottom;
}
.taken-result {
  font-size: 30px;
  font-weight: bold;
  color: #000000;
}
.recharge-button {
  width: 179px;
  height: 57px;
  line-height: 57px;
  background: #0d45a1;
  border-radius: 10px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #ffffff;
  cursor: pointer;
}
.recharge-icon {
  display: inline-block;
  width: 34px;
  height: 34px;
  margin-top: 10px;
  background: url("../assets/image/chongzhi small.png") no-repeat 100% 100%;
  background-size: contain;
  vertical-align: text-bottom;
}
.board-container {
  height: 754px;
  background: #f3f4f8;
  border-radius: 20px;
  margin-top: 31px;
  padding: 0 22px;
}
.switch-board {
  text-align: center;
  padding-top: 48px;
}
.taken-record,
.recharge-record-title {
  position: relative;
  display: inline-block;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  padding: 0 48px;
  cursor: pointer;
  margin-bottom: 30px;
}
.taken-record {
  border-right: 1px solid #4c4c4c;
}
.bottom-beacon {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 5px;
  background: #0d45a1;
  border-radius: 3px;
  display: none;
}
.text-active {
  color: #0d45a1;
}
.beacon-active {
  display: block;
}
.board-container:deep(.arco-table-th) {
  background: #d8ddf0;
}
</style>

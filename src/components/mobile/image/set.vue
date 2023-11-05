<template>
  <a-form
    ref="formRef"
    :size="formData.size"
    :model="formData"
    :style="{ width: '100%' }"
    @submit="handleSubmit"
  >
    <a-form-item hide-label field="" label="">
      <section style="flex: 1; display: flex; flex-direction: column">
        <p class="label-title" style="margin-bottom: 16px">
          <span>参数</span>
        </p>
        <p>
          {{ JSON.stringify(formData) }}
        </p>
      </section>
    </a-form-item>
    <a-form-item hide-label field="scale" label="">
      <section style="flex: 1; display: flex; flex-direction: column">
        <p class="label-title" style="margin-bottom: 16px">
          <span>图片比例</span>
        </p>
        <ul class="scale-list">
          <li
            class="scale-item"
            :class="{ 'is-active': formData.scale === 1 }"
            @click="formData.scale = 1"
          >
            <section></section>
            <span>1 : 1</span>
          </li>
          <li
            class="scale-item"
            :class="{ 'is-active': formData.scale === 2 }"
            @click="formData.scale = 2"
          >
            <section></section>
            <span>4 : 3</span>
          </li>
          <li
            class="scale-item"
            :class="{ 'is-active': formData.scale === 3 }"
            @click="formData.scale = 3"
          >
            <section></section>
            <span>3 : 4</span>
          </li>
          <li
            class="scale-item"
            :class="{ 'is-active': formData.scale === 4 }"
            @click="formData.scale = 4"
          >
            <section></section>
            <span>16 : 9</span>
          </li>
          <li
            class="scale-item"
            :class="{ 'is-active': formData.scale === 5 }"
            @click="formData.scale = 5"
          >
            <section></section>
            <span>9 : 16</span>
          </li>
        </ul>
      </section>
    </a-form-item>
    <a-form-item hide-label field="model" label="">
      <section style="flex: 1; display: flex; flex-direction: column">
        <p class="label-title" style="margin-bottom: 16px">
          <span>选择模型</span>
        </p>
        <ul class="model-list">
          <li
            class="model-item"
            :class="{ 'is-active': formData.model === 1 }"
            @click="formData.model = 1"
          >
            <section>
              <img
                :src="getAssetsFile('/src/assets/mobile/chongzhi.png')"
                style="width: 100%; height: 100%"
              />
            </section>
            <span>MJ- 通用模型</span>
          </li>
          <li
            class="model-item"
            :class="{ 'is-active': formData.model === 2 }"
            @click="formData.model = 2"
          >
            <section>
              <img
                :src="getAssetsFile('/src/assets/mobile/chongzhi.png')"
                style="width: 100%; height: 100%"
              />
            </section>
            <span>NIJI- 动漫模型</span>
          </li>
        </ul>
      </section>
    </a-form-item>
    <a-form-item hide-label field="edition" label="">
      <section style="flex: 1; display: flex; align-items: center">
        <p class="label-title">
          <span>版本</span>
        </p>
        <a-select
          v-model="formData.edition"
          :style="{
            flex: '1',
            'background-color': 'transparent',
            border: ' 1px solid #414141',
          }"
          placeholder="Please select ..."
        >
          <a-option>Beijing</a-option>
          <a-option>Shanghai</a-option>
          <a-option>Guangzhou</a-option>
          <a-option disabled>Disabled</a-option>
        </a-select>
      </section>
    </a-form-item>
    <a-form-item hide-label field="raw" label="">
      <section style="flex: 1; display: flex; align-items: center">
        <p class="label-title">
          <span>RAW</span>
        </p>
        <a-switch v-model="formData.raw" />
      </section>
    </a-form-item>
    <a-form-item hide-label field="repeat" label="">
      <section style="flex: 1; display: flex; align-items: center">
        <p class="label-title">
          <span>重复</span>
        </p>
        <a-switch v-model="formData.repeat" />
      </section>
    </a-form-item>
    <a-form-item hide-label field="pq" label="">
      <section style="flex: 1; display: flex; align-items: center">
        <p class="label-title">
          <span>画质</span>
        </p>
        <a-select
          v-model="formData.pq"
          :style="{
            flex: '1',
            'background-color': 'transparent',
            border: ' 1px solid #414141',
          }"
          placeholder="Please select ..."
        >
          <a-option>Beijing</a-option>
          <a-option>Shanghai</a-option>
          <a-option>Guangzhou</a-option>
          <a-option disabled>Disabled</a-option>
        </a-select>
      </section>
    </a-form-item>
    <a-form-item hide-label field="mess" label="">
      <section style="flex: 1; display: flex; align-items: center">
        <p class="label-title">
          <span>混乱</span>
        </p>
        <a-input-number
          v-model="formData.mess"
          type="number"
          :style="{
            flex: '1',
            'background-color': 'transparent',
            border: ' 1px solid #414141',
          }"
          placeholder="Please enter something"
          allow-clear
        >
        </a-input-number>
      </section>
    </a-form-item>
    <a-form-item hide-label field="style" label="">
      <section style="flex: 1; display: flex; flex-direction: column">
        <p class="label-title">
          <span>风格化</span>
        </p>
        <a-slider
          v-model="formData.style"
          :default-value="5"
          :style="{ 'font-size': '14px', margin: 0 }"
          :max="15"
          :marks="{
            0: '低',
            5: '高',
            10: '强',
            15: '强烈',
          }"
        />
      </section>
    </a-form-item>
    <a-form-item hide-label field="simple" label="">
      <section style="flex: 1; display: flex; align-items: center">
        <p class="label-title">
          <span>简单模式</span>
        </p>
        <a-switch v-model="formData.simple" />
      </section>
    </a-form-item>
    <a-form-item hide-label field="" label="">
      <section style="flex: 1; display: flex; align-items: center">
        <p class="label-title">
          <span>快捷工具</span>
        </p>
        <a-button
          type="text"
          style="font-size: 12px; color: #ffb400"
          @click="$refs.formRef.resetFields()"
          >重置设置</a-button
        >
      </section>
    </a-form-item>
  </a-form>
</template>
<script setup>
import { reactive } from "vue";
import { getAssetsFile } from "@/assets/utils/file";
//
const formData = reactive({
  //
  size: "medium",
  // 比例
  scale: 1,
  // 模型
  model: 1,
  // 版本
  edition: null,
  // RAW
  raw: true,
  // 重复
  repeat: false,
  // 画质
  pq: null,
  // 混乱
  mess: null,
  // 风格化
  style: null,
  // 简单模式
  simple: null,
});
</script>
<style scoped>
.label-title {
  font-size: 12px;
  font-weight: 300;
  color: #ffffff;
  text-align: left;
  margin-right: 20px;
}
.scale-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.scale-item {
  flex: 1;
  height: 55px;
  background: #131313;
  border: 1px solid #ffffff;
  border-radius: 4px;
  margin-right: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0 2px;
}
.scale-item:last-of-type {
  margin: 0;
}
.scale-item section {
  transition: var(--transition);
}
.scale-item span {
  font-size: 10px;
  font-weight: 400;
  transition: var(--transition);
}
.scale-item.is-active section {
  color: #1460dd !important;
  border-color: #1460dd !important;
}
.scale-item.is-active span {
  color: #1460dd !important;
}
.scale-item:first-of-type section {
  width: 28px;
  height: 28px;
  border: 2px solid #ffffff;
  border-radius: 4px;
}
.scale-item:nth-of-type(2) section {
  width: 32px;
  height: 24px;
  border: 2px solid #ffffff;
  border-radius: 4px;
}
.scale-item:nth-of-type(3) section {
  width: 24px;
  height: 32px;
  border: 2px solid #ffffff;
  border-radius: 4px;
}
.scale-item:nth-of-type(4) section {
  width: 32px;
  height: 18px;
  border: 2px solid #ffffff;
  border-radius: 4px;
}
.scale-item:nth-of-type(5) section {
  width: 18px;
  height: 32px;
  border: 2px solid #ffffff;
  border-radius: 4px;
}
/*  */
.model-list {
  display: flex;
}
.model-item {
  flex: 1;
  margin-right: 12px;
  display: flex;
  flex-direction: column;
}

.model-item:last-of-type {
  margin: 0;
}
.model-item section {
  height: 85px;
  border: 4px solid transparent;
}
.model-item.is-active section {
  border-color: #1c64dc;
}
.model-item span {
  font-size: 10px;
  text-align: left;
  padding-top: 4px;
}
/*  */
.edition {
  display: flex;
}
.edition > section {
  flex: 1;
}
::v-deep .arco-slider-with-marks {
  padding-left: 4px;
  padding-right: 4px;
}
::v-deep .arco-slider-marks .arco-slider-mark {
  font-size: 11px;
  width: 50px;
  padding-top: 4px;
}
</style>

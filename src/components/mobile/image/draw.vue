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
    <a-form-item hide-label field="description" label="">
      <section style="flex: 1; display: flex; flex-direction: column">
        <p class="label-title" style="margin-bottom: 16px">
          <span>提示词（支持中文）</span>
        </p>
        <a-textarea
          v-model="formData.description"
          placeholder="Please enter something"
          auto-size
          allow-clear
          :style="{
            'background-color': 'transparent',
            border: ' 1px solid #414141',
          }"
        />
      </section>
    </a-form-item>
    <a-form-item hide-label field="scale" label="">
      <section
        style="
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <a-switch v-model="formData.model">
          <template #checked> 普通模式 </template>
          <template #unchecked> OFF </template>
        </a-switch>
        <a-button type="primary">
          <template #icon>
            <img
              :src="getAssetsFile('/src/assets/mobile/image-image.png')"
              width="12"
            />
          </template>
          开始作图
        </a-button>
      </section>
    </a-form-item>
  </a-form>
  <section></section>
</template>
<script setup>
import { reactive } from "vue";
import { getAssetsFile } from "@/assets/utils/file";
//
const formData = reactive({
  //
  size: "medium",
  // 描述
  description: null,
  // 模式
  model: true,
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
::v-deep .arco-textarea {
  font-size: 10px;
  padding: 8px 10px;
}
</style>

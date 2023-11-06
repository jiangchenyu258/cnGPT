<template>
  <div class="paint-module">
    <div class="left-form">
      <div class="pictrue-scale">
        <p class="scale-title">图片比例</p>
        <div class="scale-radio">
          <div
            class="radio-item"
            @click="shapeClickHandle(1)"
            :class="{ 'shape-active': shapeKey === 1 }"
          >
            <div
              class="radio-shape1"
              :class="{ 'item-active': shapeKey === 1 }"
            ></div>
            <div class="shape-text" :class="{ 'text-active': shapeKey === 1 }">
              1 : 1
            </div>
          </div>
          <div
            class="radio-item"
            @click="shapeClickHandle(2)"
            :class="{ 'shape-active': shapeKey === 2 }"
          >
            <div
              class="radio-shape2"
              :class="{ 'item-active': shapeKey === 2 }"
            ></div>
            <div class="shape-text" :class="{ 'text-active': shapeKey === 2 }">
              4 : 3
            </div>
          </div>
          <div
            class="radio-item"
            @click="shapeClickHandle(3)"
            :class="{ 'shape-active': shapeKey === 3 }"
          >
            <div
              class="radio-shape3"
              :class="{ 'item-active': shapeKey === 3 }"
            ></div>
            <div class="shape-text" :class="{ 'text-active': shapeKey === 3 }">
              3 : 4
            </div>
          </div>
          <div
            class="radio-item"
            @click="shapeClickHandle(4)"
            :class="{ 'shape-active': shapeKey === 4 }"
          >
            <div
              class="radio-shape4"
              :class="{ 'item-active': shapeKey === 4 }"
            ></div>
            <div class="shape-text" :class="{ 'text-active': shapeKey === 4 }">
              16 : 9
            </div>
          </div>
          <div
            class="radio-item"
            @click="shapeClickHandle(5)"
            :class="{ 'shape-active': shapeKey === 5 }"
          >
            <div
              class="radio-shape5"
              :class="{ 'item-active': shapeKey === 5 }"
            ></div>
            <div class="shape-text" :class="{ 'text-active': shapeKey === 5 }">
              9 : 16
            </div>
          </div>
        </div>
      </div>
      <div class="select-model">
        <p class="model-title">选择模型</p>
        <div class="pictrue-radio">
          <div class="pictrue-item">
            <div
              class="pictrue"
              :class="{ 'pictrue-active': pictrueKey === 1 }"
              @click="pictrueClickHandle(1)"
            ></div>
            <p style="text-align: left">MJ-通用模型</p>
          </div>
          <div class="pictrue-item">
            <div
              class="pictrue"
              :class="{ 'pictrue-active': pictrueKey === 2 }"
              @click="pictrueClickHandle(2)"
            ></div>
            <p style="text-align: left">NIJI-动漫模型</p>
          </div>
        </div>
      </div>
      <div class="form-module">
        <div class="version-select">
          <span style="line-height: 37px; font-size: 15px">版本</span>
          <a-select :style="{ width: '320px' }" placeholder="请选择版本">
            <a-option>5.1</a-option>
            <a-option>5.2</a-option>
          </a-select>
        </div>
        <div class="version-select">
          <span style="line-height: 37px; font-size: 15px">RAW</span>
          <div class="switch-button">
            <a-switch
              v-model="rawValue"
              checked-value="true"
              unchecked-value="false"
            />
          </div>
          <a-popover>
            <div class="info-icon"></div>
            <template #content>
              <p>RAW</p>
            </template>
          </a-popover>
        </div>
        <div class="version-select">
          <span style="line-height: 37px; font-size: 15px">重复</span>
          <div class="switch-button">
            <a-switch
              v-model="repeatValue"
              checked-value="true"
              unchecked-value="false"
            />
          </div>
          <a-popover>
            <div class="info-icon"></div>
            <template #content>
              <p>重复</p>
            </template>
          </a-popover>
        </div>
        <div class="version-select">
          <span style="line-height: 37px; font-size: 15px">参数</span>
          <a-popover>
            <div class="info-icon"></div>
            <template #content>
              <p>参数</p>
            </template>
          </a-popover>
        </div>
        <div class="version-select">
          <span style="line-height: 37px; font-size: 15px">画质</span>
          <a-select :style="{ width: '320px' }" placeholder="请选择画质">
            <a-option>高清</a-option>
            <a-option>原画</a-option>
          </a-select>
        </div>
        <div class="version-select">
          <span style="line-height: 37px; font-size: 15px">混乱</span>
          <a-input-number
            :style="{ width: '320px' }"
            placeholder="请输入数值"
            :default-value="0"
            mode="button"
            class="input-demo"
          />
        </div>
        <div class="version-select">
          <span style="line-height: 37px; font-size: 15px">风格化</span>
          <a-popover>
            <div class="info-icon"></div>
            <template #content>
              <p>风格化</p>
            </template>
          </a-popover>
        </div>
        <div class="version-select">
          <div
            class="style-select"
            :class="{ 'style-select-active': styleValue === 1 }"
            @click="styleClickHandle(1)"
          >
            低
          </div>
          <div
            class="style-select"
            :class="{ 'style-select-active': styleValue === 2 }"
            @click="styleClickHandle(2)"
          >
            高
          </div>
          <div
            class="style-select"
            :class="{ 'style-select-active': styleValue === 3 }"
            @click="styleClickHandle(3)"
          >
            强
          </div>
          <div
            class="style-select"
            :class="{ 'style-select-active': styleValue === 4 }"
            @click="styleClickHandle(4)"
          >
            强烈
          </div>
        </div>
        <!-- slider config -->
        <!-- <div class="version-select">
          <a-slider
            :default-value="1"
            :style="{ width: '400px' }"
            :step="1"
            :max="4"
            :show-ticks="true"
          />
        </div> -->
        <div class="version-select">
          <span style="line-height: 37px; font-size: 15px">简单模式</span>
          <div class="switch-button">
            <a-switch
              v-model="easyValue"
              checked-value="true"
              unchecked-value="false"
            />
          </div>
          <a-popover>
            <div class="info-icon"></div>
            <template #content>
              <p>简单模式</p>
            </template>
          </a-popover>
        </div>
        <div class="version-select">
          <span style="line-height: 37px; font-size: 15px">快捷工具</span>
          <div class="switch-button">
            <span class="reset-config">重置设置</span>
          </div>
        </div>
      </div>
    </div>
    <div class="right-form">
      <p class="paint-title">绘图</p>
      <div class="key-word-form">
        <div class="top-button">
          <div class="top-title">提示词(支持中文)</div>
          <div
            class="switch-pictrue"
            :class="{ 'switch-pictrue-active': switchSampleValue }"
            @click="switchSampleValue = !switchSampleValue"
          >
            使用参考图功能(可选)
          </div>
        </div>
        <div class="text-area">
          <a-textarea
            placeholder="请输入 AI 绘画的提示词，支持中文内容"
            allow-clear
          />
        </div>
        <div class="start-button-group">
          <a-switch>
            <template #checked> 普通模式 </template>
            <template #unchecked> 简单模式 </template>
          </a-switch>
          <div class="start-button">
            <div class="start-icon"></div>
            开始作图
          </div>
        </div>
        <div class="other-info">
          <span class="my-paint">我的作图</span>
          <div class="my-paint-info"></div>
          <div class="paint-result">已出图 : 4</div>
          <div class="refresh">
            <div class="refresh-icon"></div>
            刷新
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const shapeKey = ref(1);

const pictrueKey = ref(1);

const rawValue = ref(true);

const repeatValue = ref(true);

const styleValue = ref(1);

const easyValue = ref(true);

const switchSampleValue = ref(true);

const shapeClickHandle = (key: number) => {
  shapeKey.value = key;
};
const pictrueClickHandle = (key: number) => {
  pictrueKey.value = key;
};
const styleClickHandle = (key: number) => {
  styleValue.value = key;
};
</script>

<style scoped>
.paint-module {
  display: flex;
  width: 100%;
  height: 100%;
}
.left-form {
  width: 400px;
  height: 944px;
  background: #f3f4f8;
  border-radius: 20px;
  margin: 104px 40px 0 40px;
  padding: 25px 35px 0 32px;
}
.scale-title {
  margin-top: 0px;
  text-align: left;
  font-size: 16px;
}
.scale-radio {
  display: flex;
  justify-content: space-between;
  height: 68px;
}
.radio-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 55px;
  height: 68px;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  cursor: pointer;
}
.radio-shape1,
.radio-shape2,
.radio-shape3,
.radio-shape4,
.radio-shape5 {
  width: 34px;
  height: 34px;
  border: 2px solid #dfdfdf;
  border-radius: 6px;
}
.radio-shape2 {
  width: 37px;
  height: 28px;
}
.radio-shape3 {
  width: 28px;
  height: 37px;
}
.radio-shape4 {
  width: 36px;
  height: 20px;
}
.radio-shape5 {
  width: 20px;
  height: 35px;
}
.shape-text {
  font-size: 13px;
  font-weight: 400;
  color: #999999;
}
.shape-active {
  background-color: #1b65de;
  border: 1px solid #1b65de;
}
.item-active {
  border: 2px solid #ffffff;
}
.text-active {
  color: #ffffff;
}

.model-title {
  margin-top: 29px;
  text-align: left;
  font-size: 16px;
}
.pictrue-radio {
  display: flex;
  justify-content: space-between;
  height: 102px;
}
.pictrue-item {
  width: 162px;
  height: 130px;
}
.pictrue {
  width: 162px;
  height: 102px;
  background-color: #fff;
  cursor: pointer;
}
.pictrue-active {
  border: 3px solid #1c64dc;
  box-sizing: border-box;
}
.form-module {
  margin-top: 58px;
}
.version-select {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.version-select:deep(.arco-select-view-single) {
  height: 37px;
  background: #ffffff;
  border: 1px solid #cbcbcb;
  border-radius: 10px;
  vertical-align: middle;
}

.switch-button {
  width: 320px;
  text-align: left;
  line-height: 37px;
}
.info-icon {
  position: absolute;
  right: 0;
  top: 50%;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
  background: url("../../assets/image/info.png") no-repeat 100% 100%;
  background-size: contain;
}
.version-select:deep(.arco-input-number) {
  height: 37px;
  background: #ffffff;
  border: 1px solid #cbcbcb;
}
.version-select:deep(.arco-btn) {
  background: #ffffff;
}
.version-select:deep(.arco-input-wrapper) {
  background: #ffffff;
}
.style-select {
  width: 74px;
  height: 37px;
  line-height: 37px;
  background: #ffffff;
  border: 1px solid #cbcbcb;
  border-radius: 10px;
  cursor: pointer;
}
.style-select-active {
  background: #1c64dc;
  color: #fff;
}
.reset-config {
  font-size: 15px;
  font-weight: 300;
  color: #ff9600;
  cursor: pointer;
}

.right-form {
  flex: 1;
  padding-right: 40px;
}
.paint-title {
  font-size: 30px;
  font-weight: 400;
  color: #000000;
}
.key-word-form {
  height: 825px;
  background: #f3f4f8;
  border-radius: 20px;
  padding: 23px 31px 0 37px;
}
.top-button {
  display: flex;
  height: 40px;
}
.top-title {
  font-size: 18px;
  font-weight: 300;
  color: #000000;
  line-height: 40px;
}

.switch-pictrue {
  width: 192px;
  height: 40px;
  border: 1px solid #1c64dc;
  border-radius: 10px;
  margin-left: 39px;
  line-height: 40px;
  font-size: 16px;
  font-weight: 300;
  color: #1c64dc;
  cursor: pointer;
}

.switch-pictrue-active {
  background-color: #1c64dc;
  color: #fff;
}
.text-area {
  margin-top: 20px;
}
.text-area:deep(.arco-textarea) {
  height: 207px;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 20px;
}
.text-area:deep(.arco-textarea-focus) {
  border-radius: 20px;
}
.start-button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  height: 51px;
}
.start-button {
  width: 169px;
  height: 51px;
  line-height: 51px;
  background: #1c64dc;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  font-weight: 300;
}
.start-icon {
  display: inline-block;
  width: 24px;
  height: 22px;
  background: url("../../assets/image/img.png") no-repeat 100% 100%;
  background-size: contain;
  vertical-align: middle;
}
.other-info {
  position: relative;
  display: flex;
  height: 51px;
}
.my-paint {
  font-size: 18px;
  font-weight: 300;
  color: #111b2e;
}
.my-paint-info {
  width: 20px;
  height: 20px;
  background: url("../../assets/image/info.png") no-repeat 100% 100%;
  background-size: contain;
  margin-left: 20px;
  margin-top: 2px;
  vertical-align: middle;
}
.paint-result {
  position: absolute;
  right: 177px;
  top: 20px;
  font-size: 16px;
  font-weight: 300;
  color: #666666;
}
.refresh {
  position: absolute;
  right: 0px;
  top: 10px;
  width: 98px;
  height: 42px;
  line-height: 42px;
  background-color: #fff;
  border: 1px solid #cecece;
  border-radius: 21px;
  font-size: 16px;
  font-weight: 300;
  color: #666666;
  cursor: pointer;
}
.refresh-icon {
  display: inline-block;
  width: 21px;
  height: 21px;
  background: url("../../assets/image/形状15.png") no-repeat 100% 100%;
  background-size: contain;
  vertical-align: middle;
}
</style>

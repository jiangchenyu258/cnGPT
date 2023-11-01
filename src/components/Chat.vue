<template>
  <div class="chat-container">
    <div class="list">
      <div v-for="item in list" key="item.key" class="list-item">
        <img src="../assets/image/形状 9 拷贝.png" class="chat-icon" />
        <p class="list-title">{{ item.title }}</p>
      </div>
    </div>
    <div class="right-container">
      <div class="top-container">
        <p class="top-title">聊天</p>
        <div class="button-container">
          <div class="switch-button">
            <div
              class="super-brain"
              :class="{ active: type === 'superBrain' }"
              @click="clickHandle('superBrain')"
            >
              <div
                class="button-icon"
                :class="{ 'button-icon-active': type === 'superBrain' }"
              ></div>
              <span>超脑</span>
            </div>
            <a-dropdown @select="handleSelect" type="chat-drop">
              <div
                class="design-mode"
                :class="{ active: type === 'designMode' }"
                @click="clickHandle('designMode')"
              >
                <div
                  class="design-icon"
                  :class="{ 'design-icon-active': type === 'designMode' }"
                ></div>
                <span>{{ initialDesignValue }}</span>
                <div
                  class="down-icon"
                  :class="{ 'down-icon-active': type === 'designMode' }"
                ></div>
              </div>
              <template #content>
                <a-doption v-for="item in designList" :key="item">{{
                  item
                }}</a-doption>
              </template>
            </a-dropdown>
          </div>
          <div class="new-chat-button">
            <div class="new-chat-icon"></div>
            <span class="new-chat-title">新建对话</span>
          </div>
        </div>
      </div>
      <div class="chat-module">
        <div class="chat-window">
          <div class="messages">
            <div
              v-for="message in messages"
              :key="message.id"
              :class="getMessageClasses(message.sender)"
            >
              <div v-if="message.sender === 'Me'" class="sender"></div>
              <div class="bot-image" v-else></div>
              <div class="content">{{ message.content }}</div>
            </div>
            <div class="inner-button">
              <a-popover>
                <div class="img-button"></div>
                <template #content>
                  <p>生成图片</p>
                </template>
              </a-popover>
              <a-popover>
                <div class="img-button create-word"></div>
                <template #content>
                  <p>生成文档</p>
                </template>
              </a-popover>
              <a-popover>
                <div class="img-button create-pdf"></div>
                <template #content>
                  <p>生成pdf</p>
                </template>
              </a-popover>
            </div>
          </div>
        </div>
        <div class="input" type="chat-input">
          <a-input
            v-model="newMessage"
            placeholder="提出你的问题"
            @press-enter="sendMessage"
          ></a-input>
          <div class="send-icon" @click="sendMessage"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import chatList from "../interface/chatListInterface";

const list: chatList[] = reactive([
  {
    title: "经PPT制作指南",
    key: 0,
  },
  {
    title: "生产者消费者模式",
    key: 1,
  },
  {
    title: "多线程编程",
    key: 2,
  },
]);

const designList: string[] = [
  "设计助手",
  "编程助手",
  "销售助手",
  "文案助手",
  "人事助手",
  "项目助手",
  "法务助手",
];

const type = ref("superBrain");

const initialDesignValue = ref("设计助手");

const messages = ref([
  { id: 1, sender: "Alice", content: "Hello!" },
  { id: 2, sender: "Bob", content: "Hi there!" },
]);
const newMessage = ref("");

const clickHandle = (typeMode: string) => {
  type.value = typeMode;
};

const handleSelect = (v: any) => {
  initialDesignValue.value = v;
};

const sendMessage = () => {
  if (newMessage.value) {
    messages.value.push({
      id: messages.value.length + 1,
      sender: "Me",
      content: newMessage.value,
    });
    newMessage.value = "";
  }
};

const getMessageClasses = (sender: any) => {
  return {
    "message-left": sender !== "Me",
    "message-right": sender === "Me",
  };
};
</script>

<style scoped>
.chat-container {
  display: flex;
  height: 100%;
  flex: 1;
}
.list {
  width: 345px;
  height: 100%;
  padding: 200px 40px 0 40px;
  box-sizing: border-box;
}
.list-item {
  display: flex;
  border-bottom: 1px solid #e6e6e6;
}
.list-title {
  margin: 0;
  padding: 10px 0;
  text-align: left;
}
.chat-icon {
  width: 20px;
  height: 20px;
  padding: 10px 24px 10px 0px;
}
.right-container {
  flex: 1;
}
.top-title {
  font-size: 30px;
  font-weight: 400;
}
.button-container {
  position: relative;
  text-align: center;
}
.switch-button {
  display: flex;
  width: 538px;
  height: 56px;
  background-color: #fff;
  margin: 0 auto;
  /* border: 1px solid #111B2E;
  border-radius: 20px; */
}

.super-brain,
.design-mode {
  width: 269px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #111b2e;
  border-radius: 20px 0px 0px 20px;
  font-size: 18px;
  font-weight: 400;
  color: #111b2e;
  line-height: 56px;
  cursor: pointer;
}
.design-mode {
  border-radius: 0px 20px 20px 0px;
}
.button-icon,
.design-icon {
  display: inline-block;
  width: 26px;
  height: 23px;
  background: url("../assets/image/chat_a.png") no-repeat 100% 100%;
  vertical-align: middle;
  margin-right: 12px;
  background-size: contain;
}
.design-icon {
  background: url("../assets/image/zhushou_a.png") no-repeat 100% 100%;
  background-size: contain;
}

.active {
  color: #ffffff;
  background-color: #111b2e;
}

.button-icon-active {
  background: url("../assets/image/chat_b.png") no-repeat 100% 100%;
  background-size: contain;
}
.design-icon-active {
  background: url("../assets/image/zhushou_b.png") no-repeat 100% 100%;
  background-size: contain;
}
.down-icon {
  display: inline-block;
  width: 16px;
  height: 9px;
  background: url("../assets/image/形状6-2.png") no-repeat 100% 100%;
  vertical-align: middle;
  background-size: contain;
  margin-left: 27px;
}
.down-icon-active {
  background: url("../assets/image/形状6.png") no-repeat 100% 100%;
  background-size: contain;
}
.new-chat-button {
  position: absolute;
  top: 0;
  right: 44px;
  width: 154px;
  height: 57px;
  border: 1px solid #1c64dc;
  border-radius: 10px;
  text-align: center;
  line-height: 57px;
  cursor: pointer;
}

.new-chat-icon {
  display: inline-block;
  width: 27px;
  height: 24px;
  background: url("../assets/image/形状22.png") no-repeat 100% 100%;
  vertical-align: middle;
  margin-right: 12px;
  background-size: contain;
}

.new-chat-title {
  font-size: 18px;
  font-weight: 400;
  color: #1c64dc;
}

/* chat window start */

.chat-module {
  margin-top: 32px;
  padding-right: 44px;
}
.chat-window {
  display: flex;
  flex-direction: column;
  height: 754px;
  background: #f3f4f8;
  border-radius: 20px;
  padding: 16px;
}

.messages {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 700px;
  overflow-y: scroll;
  scrollbar-width: none;
}

.messages::-webkit-scrollbar {
  display: none;
}

.message {
  margin-bottom: 8px;
  padding: 8px;
}

.message-left {
  align-self: flex-start;
  margin-top: 40px;
}

.message-right {
  background-color: #f9f9f9;
  align-self: flex-end;
  margin-top: 40px;
}

.message-right .content {
  background: #1c64dc;
  max-width: 300px;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
}

.message-left .content {
  max-width: 1330px;
  background: #ffffff;
  border-radius: 20px;
  padding: 10px;
  margin-top: 13px;
}

.sender {
  font-weight: bold;
  background-color: #fff;
}

.input {
  display: flex;
  gap: 8px;
  align-items: center;
}

.bot-image {
  width: 70px;
  height: 67px;
  background: url("../assets/image/图层 2.png") no-repeat 100% 100%;
  background-size: contain;
}

.input {
  margin-top: 23px;
}

.send-icon {
  width: 66px;
  height: 66px;
  background: url("../assets/image/send.png") no-repeat 100% 100%;
  border-radius: 50%;
  background-size: contain;
  cursor: pointer;
}

.img-button {
  width: 41px;
  height: 41px;
  margin-right: 12px;
  background: url("../assets/image/组 25.png") no-repeat 100% 100%;
  border-radius: 10px;
  background-size: contain;
  cursor: pointer;
}

.inner-button {
  position: absolute;
  display: flex;
  bottom: 0px;
  left: 50%;
  width: 200px;
  height: 41px;
  transform: translateX(-50%);
}

.create-word {
  background: url("../assets/image/组 26.png") no-repeat 100% 100%;
  background-size: contain;
}

.create-pdf {
  background: url("../assets/image/组 27.png") no-repeat 100% 100%;
  background-size: contain;
}

/* chat window end */
</style>

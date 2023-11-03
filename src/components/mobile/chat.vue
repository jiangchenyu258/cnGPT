<template>
  <section class="content" @click="actionShow = false">
    <header class="header">
      <!--  -->
      <div
        style="
          width: 100%;
          height: 44px;
          border-bottom: 1px solid #4c4c4c;
          display: flex;
          align-items: center;
          padding: 0 24px;
        "
      >
        <img
          src="../../assets/mobile/menu.png"
          width="14"
          height="11"
          @click="$router.push({ name: 'MobileMenu' })"
        />
        <span style="flex: 1; font-size: 12px; color: #ffffff">聊天</span>
      </div>
      <!--  -->
      <div class="jjj-button-group">
        <div
          class="jjj-button"
          :class="{ 'is-active': current === 0 }"
          @click="onButtonChange(0)"
        >
          <img
            v-if="current === 0"
            class="jjj-button_left-icon"
            src="../../assets/mobile/chat_b.png"
            width="14"
          />
          <img
            v-else
            class="jjj-button_left-icon"
            src="../../assets/mobile/chat_a.png"
            width="14"
          />
          <span class="jjj-button_text">超脑</span>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            flex: 1;
            position: relative;
          "
        >
          <div
            style="
              width: 100%;
              height: 35px;
              position: absolute;
              top: 0;
              left: 0;
              background-color: #3c3c3c;
              border-radius: 0 8px 0 0;
            "
            :style="{
              overflow: current === 1 && actionShow ? '' : 'hidden',
              borderRadius:
                current === 1 && actionShow ? '0 8px 0 0' : '0 8px 8px 0',
            }"
          >
            <div
              class="jjj-button"
              :class="{ 'is-active': current === 1 }"
              @click.stop="onButtonChange(1)"
              style="
                border-top: 1px solid #3c3c3c;
                border-bottom: 1px solid #3c3c3c;
                border-right: 1px solid #3c3c3c;
                border-radius: 0 8px 8px 0;
              "
              :style="{ overflow: current === 1 && actionShow ? '' : 'hidden' }"
            >
              <img
                v-if="current === 1"
                class="jjj-button_left-icon"
                src="../../assets/mobile/zhushou_b.png"
                width="14"
              />
              <img
                v-else
                class="jjj-button_left-icon"
                src="../../assets/mobile/zhushou_a.png"
                width="14"
              />
              <span class="jjj-button_text">{{ actionCurrent.name }}</span>
              <img
                v-if="current === 1"
                class="jjj-button_right-icon"
                src="../../assets/mobile/arrow_b.png"
                width="10"
              />
              <img
                v-else
                class="jjj-button_right-icon"
                src="../../assets/mobile/arrow_a.png"
                width="10"
              />
            </div>

            <div
              v-for="item in actionList"
              :key="item.value"
              class="jjj-action-item"
              :class="{ 'is-active': actionCurrent.value === item.value }"
              @click.stop="onActionChange(item)"
            >
              <div class="">
                <span style="font-size: 12px; color: var(--font-color)">
                  {{ item.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="main">
      <!-- 简介 -->
      <div
        style="
          font-size: 10px;
          line-height: 16px;
          color: #bababa;
          padding: 0 24px 24px;
          text-align: left;
        "
      >
        <span>
          超脑是一款采用多种自然语言大模型的AI应用，可为用户提供更准确、详细的问题回答和服务。亦是用户工作岗位上的得力助手，目前的岗位助手有设计助手、编程助手、销售助手、文案助手、人事助手、项目助手、法务助手。未来，将有更多工作助手上线。
        </span>
      </div>
      <!-- 聊天 -->
      <div class="jjj-chat-list">
        <div
          v-for="(item, index) in chatList"
          :key="index"
          class="jjj-chat-item"
          :class="{ 'is-me': item.status === 0 }"
        >
          <img
            v-if="item.status !== 0"
            src="../../assets/mobile/rebot.png"
            width="30"
            style="margin-bottom: 16px"
          />
          <div class="jjj-chat-item_content">
            <span
              style="lineheight: 16px; color: var(--font-color)"
              :style="{ fontSize: item.status ? '12px' : '10px' }"
            >
              {{ item.content }}
            </span>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 18px 0;
        "
      >
        <div
          style="
            width: 28px;
            height: 28px;
            background: #252525;
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <img src="../../assets/mobile/image.png" width="24" />
        </div>
        <div
          style="
            width: 28px;
            height: 28px;
            background: #252525;
            border-radius: 4px;
            margin: 0 8px;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <img src="../../assets/mobile/word.png" width="24" />
        </div>
        <div
          style="
            width: 28px;
            height: 28px;
            background: #252525;
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <img src="../../assets/mobile/pdf.png" width="24" />
        </div>
      </div>
      <!--  -->
      <div style="padding: 0 24px 16px">
        <div
          style="
            width: 100%;
            height: 36px;
            border-radius: 8px;
            padding: 8px 12px;
            background-color: #252525;
            display: flex;
            overflow: hidden;
            justify-content: space-between;
            align-items: center;
          "
        >
          <input
            type="text"
            placeholder="请提出你的问题"
            style="
              font-size: 10px;
              color: #ffffff;
              flex: 1;
              border: 0;
              outline: 0;
              background-color: transparent;
            "
          />
          <img src="../../assets/mobile/send.png" width="18" height="16" />
        </div>
      </div>
    </footer>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";

//
const current = ref(0);
//
const actionShow = ref(false);
const actionCurrent = ref({
  name: "编程助手",
  value: 0,
});
const actionList = reactive([
  {
    name: "编程助手",
    value: 0,
  },
  {
    name: "设计助手",
    value: 1,
  },
  {
    name: "销售助手",
    value: 2,
  },
  {
    name: "文案助手",
    value: 3,
  },
  {
    name: "人事助手",
    value: 4,
  },
  {
    name: "项目助手",
    value: 5,
  },
  {
    name: "法务助手",
    value: 6,
  },
]);
//
const chatList = reactive([
  {
    content: "谁是蔡徐坤",
    status: 0,
  },
  {
    content:
      "蔡徐坤（KUN），1998年8月2日出生于浙江，身高184cm，中国内地男歌手、制作人、演员。2018年1月，参加爱奇艺打造的中国首档偶像男团竞演养成类真人秀《偶像练习生 Idol Producer》，比赛名次连续四次第一，最后凭借47,640,887票以绝对优势C位出道 [1] ，同时担任男子团体Nine Percent的队长。",
    status: 1,
  },
  {
    content: "谁是蔡徐坤",
    status: 0,
  },
  {
    content:
      "蔡徐坤（KUN），1998年8月2日出生于浙江，身高184cm，中国内地男歌手、制作人、演员。2018年1月，参加爱奇艺打造的中国首档偶像男团竞演养成类真人秀《偶像练习生 Idol Producer》，比赛名次连续四次第一，最后凭借47,640,887票以绝对优势C位出道 [1] ，同时担任男子团体Nine Percent的队长。",
    status: 1,
  },
  {
    content: "谁是蔡徐坤",
    status: 0,
  },
  {
    content:
      "蔡徐坤（KUN），1998年8月2日出生于浙江，身高184cm，中国内地男歌手、制作人、演员。2018年1月，参加爱奇艺打造的中国首档偶像男团竞演养成类真人秀《偶像练习生 Idol Producer》，比赛名次连续四次第一，最后凭借47,640,887票以绝对优势C位出道 [1] ，同时担任男子团体Nine Percent的队长。",
    status: 1,
  },
]);
//
const value = ref("");

// 头部button切换
const onButtonChange = (prop) => {
  current.value = prop;
  actionShow.value = !actionShow.value;
};
// 头部action切换
const onActionChange = (prop) => {
  actionShow.value = false;
  actionCurrent.value = prop;
};
//
const change = (e) => {
  console.log("change", e);
};
</script>

<style scoped>
.content {
  --bg-color: #000000;
  --font-color: #ffffff;
}

.content {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  transition: 250ms;
}
.header {
}
.main {
  flex: 1;
  overflow-y: auto;
}
.footer {
  padding: 20rpx;
}

.jjj-button-group {
  --font-color: #949494;
  --bg-color: #181818;
  --bg-active-color: #3c3c3c;
  --border-color: #3c3c3c;
}
.jjj-button-group {
  margin: 12px 24px 24px;
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

.jjj-action-item {
  --font-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background-color: #181818;
  transition: 250ms;
}
.jjj-action-item.is-active {
  background-color: #0d45a1;
}
.jjj-chat-list {
  display: flex;
  flex-direction: column;
  padding: 0 24px;
}
.jjj-chat-item {
  display: flex;
  flex-direction: column;
}
.jjj-chat-item.is-me {
  align-items: end;
}
.jjj-chat-item_content {
  width: fit-content;
  background-color: #1c1c1c;
  border-radius: 8px;
  padding: 12px 18px;
  margin-bottom: 24px;
  display: flex;
  justify-content: start;
  text-align: left;
}

.jjj-chat-item.is-me .jjj-chat-item_content {
  background-color: #1c64dc;
}
</style>

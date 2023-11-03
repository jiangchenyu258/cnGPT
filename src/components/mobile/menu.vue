<template>
  <section class="page">
    <!-- side menu -->
    <side class="side">
      <div
        class="side-menu-item"
        :class="{ 'is-active': current === 0 }"
        @click="onMenuChange(0)"
      >
        <img src="../../assets/mobile/menu-chat.png" width="24" height="22" />
      </div>
      <div
        class="side-menu-item"
        :class="{ 'is-active': current === 1 }"
        @click="onMenuChange(1)"
      >
        <img src="../../assets/mobile/menu-image.png" width="24" height="22" />
      </div>
      <div
        class="side-menu-item"
        :class="{ 'is-active': current === 2 }"
        @click="onMenuChange(2)"
      >
        <img src="../../assets/mobile/menu-money.png" width="24" height="22" />
      </div>
    </side>
    <!-- main -->
    <main class="main">
      <header class="header">
        <div class="header-back-button" @click="onBackChat">
          <span>返回当前对话</span>
          <img src="../../assets/mobile/menu-back.png" width="14" height="14" />
        </div>
      </header>
      <section class="content">
        <!-- chat -->
        <div class="menu-chat-button">
          <div>
            <div
              style="
                width: 12px;
                height: 1px;
                background-color: #ffffff;
                transform: rotate(90deg);
              "
            ></div>
            <div
              style="
                width: 12px;
                height: 1px;
                background-color: #ffffff;
                transform: translateY(-1px);
              "
            ></div>
          </div>
          <span>新建对话</span>
        </div>
      </section>
    </main>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

//
const router = useRouter();

//
const current = ref(0);

// 菜单切换
const onMenuChange = (prop) => {
  current.value = prop;
};
// 返回聊天
const onBackChat = () => {
  router.go(-1);
  console.log("go go go back chat");
};
</script>

<style scoped>
.page {
  --bg-color: #000000;
  --font-color: #ffffff;
}

.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: var(--bg-color);
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  transition: 250ms;
}

.side {
  width: 60px;
  border-right: 1px solid #4c4c4c;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  align-items: center;
}

.side-menu-item {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  background-color: transparent;
  transition: 250ms;
}
.side-menu-item.is-active {
  background-color: #0d45a1;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: end;
  padding: 16px 20px;
}
.header-back-button {
  font-size: 12px;
  color: #ffffff;
  display: flex;
  align-items: center;
}
.header-back-button span {
  margin-right: 12px;
}
.content {
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
}

.menu-chat-button {
  width: 100%;
  height: 35px;
  background: #131313;
  border: 1px solid #7a7a7a;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-chat-button span {
  font-size: 12px;
  font-weight: 300;
  margin-left: 10px;
}
</style>

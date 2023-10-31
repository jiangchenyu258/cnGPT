import { createApp } from "vue";
import App from "./App.vue";
import ArcoVue from "@arco-design/web-vue";
import router from "./router";

import "./style.css";
import "@arco-design/web-vue/dist/arco.css";

const app = createApp(App);

app.use(router);
app.use(ArcoVue);
app.mount("#app");

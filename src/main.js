import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "vue-query";
import router from "./router";
import App from "./App.vue";
import "mosha-vue-toastify/dist/style.css";
import "./style.css";
import "./lib/axios";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);
app.mount("#app");

import { createApp } from "vue";
import Router from "./router";
import "virtual:svg-icons-register";
import "element-plus/es/components/message/style/css";
import "./style.css";
import App from "./App.vue";

const APP = createApp(App);

APP.use(Router).mount("#app");

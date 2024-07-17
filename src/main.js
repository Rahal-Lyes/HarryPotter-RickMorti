import "./assets/main.css";
import naive from "naive-ui";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
app.use(naive);
app.use(router);
app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "@fontsource/quicksand/400.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import "./styles/index.css";

import { createRouter, createHead, createPinia } from "./modules";

createApp(App)
  .use(createRouter())
  .use(createHead())
  .use(createPinia())
  .mount("#app");

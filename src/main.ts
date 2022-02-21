import { createApp } from "vue";
import App from "./App.vue";
import "./styles/index.css";

import { createHead, createPinia, createRouter } from "./modules";

createApp(App)
  .use(createRouter())
  .use(createHead())
  .use(createPinia())
  .mount("#app");

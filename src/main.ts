import uviewPlus from "uview-plus";
import { createSSRApp } from "vue";
import App from "./App.vue";
import pinia from "./pages/store";
export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus);
  app.use(pinia);
  return {
    app,
  };
}

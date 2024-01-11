import { defineNuxtPlugin } from "#app";
import Toast from "vue-toastification";
import "~/assets/main.scss";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, { timeout: 1200 });
});

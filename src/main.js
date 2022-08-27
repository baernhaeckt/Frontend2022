import { createApp } from "vue";
import { createPinia } from "pinia";
import BootstrapVue3 from "bootstrap-vue-3";

import GlobalComponents from './globals'

import App from "./App.vue";
import router from "./router";

import { useAuthStore } from './stores/auth'

const app = createApp(App);

app.config.devtools = true

app.use(createPinia());

const authStore = useAuthStore()
authStore.startup()

app.use(BootstrapVue3);
app.use(router);

app.use(GlobalComponents)

app.mount("#app");

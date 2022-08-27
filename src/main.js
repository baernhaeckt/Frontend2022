import { createApp } from "vue";
import { createPinia } from "pinia";
import BootstrapVue3 from "bootstrap-vue-3";

import GlobalComponents from './globals'

import Header from "@/components/layout/Header.vue";
import HeaderDivider from "@/components/layout/HeaderDivider.vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.config.devtools = true

app.use(createPinia());
app.use(BootstrapVue3);
app.use(GlobalComponents)
app.use(router);

app.mount("#app");

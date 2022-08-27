<script setup>
import { RouterView } from "vue-router";
import Header from "./components/layout/Header.vue";
</script>

<template>
  <Header v-if="!$route.meta.hideHeader" />

  <div class="container mb-3 main-view">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "@/scss/styles.scss";

.main-view {
  max-width: 600px;
}
</style>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/layout/Header.vue";
</script>

<template>
  <Header v-if="!$route.meta.hideHeader" />

  <div class="container mb-3 main-view">
    <RouterView />
  </div>

  <b-container :toast="{ root: true }" fluid="sm" position="position-fixed"></b-container>
</template>

<style lang="scss">
@import "@/scss/styles.scss";

.main-view {
  max-width: 600px;
}
</style>

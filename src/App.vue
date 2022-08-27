<script setup>
import { RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
</script>

<template>
  <Header v-if="!$route.meta.hideHeader" />

  <div class="container-fluid my-3">
    <RouterView />
  </div>
</template>

<style type="scss">

</style>

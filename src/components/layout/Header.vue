<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 pb-3">
    <router-link class="navbar-brand" to="/">
      <img src="@/assets/logo.png" class="logo" /><span class="h4 d-inline-block ms-3">Xung anstatt Pfung</span>
    </router-link>
    <ProfileIcon></ProfileIcon>
    <HeaderDivider></HeaderDivider>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss">
.navbar {
  margin-bottom: 50px;

  .logo {
    max-width: 75px;
  }
}
</style>

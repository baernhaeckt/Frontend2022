<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <router-link class="navbar-brand" to="/"><img src="@/assets/logo.png" class="logo" /><span class="h4 d-inline-block ms-3">Xung anstatt Pfung</span></router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss">
.navbar {
    .logo {
        max-width: 75px;
    }
}
</style>
<template>
    <h1>Dein <span class="text-primary">freshfood</span> station Profil</h1>
    <b-button variant="primary" @click="logout">Logout</b-button>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import router from '../../router';

export default {
    setup() {
        const auth = useAuthStore()

        return {
            auth
        }
    },
    methods: {
        logout() {
            this.auth.logout()
            router.push('/')
        }
    }
}
</script>

<style lang="scss">
</style>

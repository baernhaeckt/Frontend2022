<template>
    <h1>Dein <span class="text-primary">freshfood</span> station Profil</h1>
    <b-button variant="primary" @click="logout">Logout</b-button>

    <pre>{{ userProfile }}</pre>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { currentUserProfile } from '@/services/user-service'

import router from '../../router';
import { ref } from 'vue';

export default {
    setup() {
        const auth = useAuthStore()

        const userProfile = ref(null)

        return {
            auth,
            currentUserProfile,
            userProfile
        }
    },
    async mounted() {
        if (this.auth.isAuthenticated) {
            var result = await this.currentUserProfile()
            this.userProfile = result
        }
    },
    methods: {
        logout() {
            this.auth.logout()
            router.push('/')
        },
        loadUserProfile() {
            if (this.auth.isAuthenticated) {
                var result = this.currentUserProfile()
                return result
            }

            return null;
        }
    }
}
</script>

<style lang="scss">
</style>

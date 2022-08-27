<template>
    <div class="header-user-profile">
        <b-button to="/profile" class="user-profile-button">
            <Man v-if="isAuthenticated"></Man>
            <NotLoggedIn v-else></NotLoggedIn>
        </b-button>
    </div>
</template>

<script>
import Man from '$icons/bodybuilding.svg'
import NotLoggedIn from '$icons/not-loggedin.svg'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';

export default {
    setup() {
        const auth = useAuthStore()

        const { isAuthenticated } = storeToRefs(auth)

        return {
            isAuthenticated
        }
    },
    components: {
        Man,
        NotLoggedIn
    }
}
</script>

<style lang="scss">
.header-user-profile {
    .user-profile-button {
        width: 60px;
        height: 60px;
        padding: 5px;
        border-radius: 50%;

        >svg {
            width: 50px;
            height: 50px;

            fill: var(--bs-primary);
        }
    }
}
</style>
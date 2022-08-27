<template>
    <b-form @submit="registerUser">
        <b-alert variant="danger" v-if="isError">
            <p>Fehler beim Login</p>
        </b-alert>
        <b-form-group id="input-group-1" label="E-Mail Adresse" label-for="input-1">
            <b-form-input id="input-1" v-model="email" type="email" placeholder="Deine E-Mail Adresse" required>
            </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Weiter &raquo;</b-button>
    </b-form>
</template>

<script>
import router from "../router";
import { useAuthStore } from "../stores/auth";
import { ref } from "vue";

export default {
    setup() {
        const auth = useAuthStore();

        const email = ref();
        const isError = ref();

        async function registerUser() {
            if (await auth.tryRegister(email.value)) {
                router.push(auth.returnUrl || "/");
            } else {
                this.isError = true;
            }
        }

        return {
            email,
            isError,
            registerUser,
        };
    },
};
</script>

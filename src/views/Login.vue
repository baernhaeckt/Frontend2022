<template>
    <b-form @submit="loginUser">
        <b-alert variant="danger" v-if="isError">
            <p>Fehler beim Login</p>
        </b-alert>
        <b-form-group id="input-group-1" label="E-Mail Adresse" label-for="input-1">
            <b-form-input id="input-1" v-model="email" type="email" placeholder="Deine E-Mail Adresse" required>
            </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Passwort" label-for="input-2">
            <b-form-input id="input-2" v-model="password" type="password" required>
            </b-form-input>
        </b-form-group>
        <b-button variant="secondary" @click="registerUser" class="me-4">Register</b-button>
        <b-button type="submit" variant="primary">Login &raquo;</b-button>
    </b-form>
</template>

<script>
import router from "../router";
import { useAuthStore } from "../stores/auth";
import { ref } from "vue";
const auth = useAuthStore();

export default {
    setup() {
        const email = ref();
        const password = ref();
        const isError = ref();

        return {
            email,
            password,
            isError
        };
    },
    methods: { // christoph.keller@bambit.ch
        async registerUser() {
            if (await auth.tryRegister(this.email)) {
                router.push(auth.returnUrl || "/");
            } else {
                this.isError = true;
            }
        },
        async loginUser() {
            if (await auth.tryLogin(this.email, this.password)) {
                router.push(auth.returnUrl || "/")
            } else {
                this.isError = true
            }
        }
    }
};
</script>

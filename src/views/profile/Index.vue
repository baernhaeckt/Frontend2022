<template>
    <h1>Dein <span class="text-primary">freshfood</span> station Profil</h1>
    <div v-if="isLoading" class="d-flex justify-content-center">
        <div class="mt-5">
            <b-spinner style="width: 3rem; height: 3rem;" variant="primary"></b-spinner>
        </div>
    </div>
    <div v-else-if="userProfile !== undefined && userProfile !== null" class="pb-5">
        <p>Hallo {{ userProfile.email }}, hier kannst Du Deinen Energie-Verbrauch tracken und hast jederzeit einen
            Überblich
            über Deine Ernährung.</p>
        <h2>Fitness-Tracker Integration</h2>
        <div class="clearfix mb-3">
            <p>Damit Du noch genauere Ergebnisse erhälst und speziell auf Dich zugeschnittene Ernährungsempfehlungen
                erhälst,
                kannst Du Deinen Fitness-Tracker anbinden.</p>
            <b-button variant="primary" class="float-end">Anbindung starten &raquo;</b-button>
        </div>

        <h2>Sonstige Mahlzeiten aufzeichnen</h2>
        <div class="mb-3">
            <p>Um den genauen restlichen Bedarf an Proteinen, Kohlenhydraten und Fetten zu errechnen, kannst Du mit
                nachfolgendem Formular Deine Mahlzeiten vor dem Verzehr fotografieren. Das eingesendete Foto wird
                mittels
                einer
                Künstlichen Intelligenz analysiert und der entsprechende Nährwert errechnet.</p>

            <input ref="file" v-on:change="(e) => handleFileUpload(e)" type="file" />
        </div>

        <h2>Sicher ausloggen</h2>
        <b-button variant="primary" class="float-end" @click="logout">Logout</b-button>

        <b-button variant="success" @click="showToast">TOAST</b-button>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { currentUserProfile } from '@/services/user-service'
import { uploadMeal } from '@/services/user-service'
import { useToast } from 'bootstrap-vue-3'

import router from '../../router';
import { ref } from 'vue';

import CameraIcon from '$icons/camera.svg'

export default {
    setup() {
        const auth = useAuthStore()

        const userProfile = ref(null)
        const file = ref(null)
        const isLoading = ref(false)
        const toast = useToast()

        return {
            auth,
            toast,
            currentUserProfile,
            userProfile,
            file,
            isLoading
        }
    },
    components: {
        CameraIcon
    },
    async mounted() {
        await this.loadUserProfile()
    },
    methods: {
        logout() {
            this.auth.logout()
            router.push('/')
        },
        async loadUserProfile() {
            if (this.auth.isAuthenticated) {
                this.isLoading = true
                var result = await this.currentUserProfile()
                this.userProfile = result
                this.isLoading = false
            }

            if (this.userProfile === undefined || this.userProfile === null) {
                this.userProfile = null
                this.auth.logout()
                router.push('/')
            }
        },
        handleFileUpload(event) {
            uploadMeal(event.target.files[0])
            event.target.value = null

            this.toast.success({ title: 'Bild-Upload erfolgreich', body: 'Das Bild wurde erfolgreich hochgeladen und wird analysiert.' })
            const self = this
            setTimeout(() => {
                self.toast.success({ title: 'Bild-Analyse abgeschlossen', body: 'Die Bildanalyse wurde abgeschlossen und die Nährwerte Deiner Mahlzeit wurden Deinem Tages-Saldo hinzugefügt.' })
            }, 10000)
        }
    }
}
</script>

<style lang="scss">
</style>

<template>
    <input ref="file" v-on:change="handleFileUpload()" type="file" />
</template>

<script>
import { ref } from 'vue';
import { uploadMeal } from '@/services/user-service'

export default {
    setup() {
        const file = ref(null)

        return {
            file
        }
    },
    methods: {
        async handleFileUpload() {
            console.log("selected file", file.value.files)

            await uploadMeal(file.value.files)
        }
    }
}
</script>

<style lang="scss">
</style>
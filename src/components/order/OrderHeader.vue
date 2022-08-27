<template>
    <b-row>
        <b-col>(1)</b-col>
        <b-col>(2)</b-col>
        <b-col>(3)</b-col>
    </b-row>
</template>

<script>
import { toRefs } from 'vue';

export default {
    props: {
        currentOrder: Object
    },
    setup(props) {

        const { currentOrder } = toRefs(props)

        return {
            currentOrder
        }
    }
}
</script>

<style lang="scss">
</style>
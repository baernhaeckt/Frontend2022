<template>
    <div>
        <div class="top-bar">
            <router-link to="/order">&laquo; Zurück</router-link>
        </div>

        <OrderHeader dishtypeSelector @dishtype:change="dishTypeChanged"></OrderHeader>
        <RouterLink to="/order/payment">Weiter zur Zahlung</RouterLink>
    </div>
</template>

<script>


export default {
    setup() {

    },
    methods: {
        dishTypeChanged(dishType) {
            console.log(dishType)
        },
        async loadIngredientsForDish(dishType) {
            const ingredients = null
        }
    }
}
</script>

<style lang="scss">
</style>
<template>
    <div class="top-bar">
        <router-link to="/">&laquo; Zurück</router-link>
    </div>
    <div class="order-header">
        <b-row class="dish-selector-container">
            <b-col class="dish-selector-col">
                <a class="dish-selector">
                    <DishSalad :enableClickAnimation="haveOrder"></DishSalad>
                </a>
            </b-col>
            <b-col class="dish-selector-col">
                <a class="dish-selector">
                    <DishCubes :enableClickAnimation="haveOrder"></DishCubes>
                </a>
            </b-col>
            <b-col class="dish-selector-col">
                <a class="dish-selector">
                    <DishIce :enableClickAnimation="haveOrder"></DishIce>
                </a>
            </b-col>
            <b-col class="dish-selector-col">
                <a class="dish-selector">
                    <DishDrink :enableClickAnimation="haveOrder"></DishDrink>
                </a>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { toRefs, ref } from 'vue';
import { RouterLink } from "vue-router";

export default {
    props: {
        order: {
            Type: Object,
            default: null
        }
    },
    setup(props) {
        const { order } = toRefs(props)

        return {
            currentOrder: order
        }
    },
    computed: {
        haveOrder() {
            return this.currentOrder !== null && this.currentOrder !== undefined
        }
    },
    components: {
        RouterLink
    }
}
</script>

<style lang="scss">
.order-header {
    background: rgb(30, 25, 26);
    background: linear-gradient(180deg, rgba(30, 25, 26, 1) 85%, rgba(127, 202, 49, 1) 85%, rgba(30, 25, 26, 1) 90%);

    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));

    padding-top: calc(1 * var(--bs-gutter-y));
    padding-right: calc(0.5 * var(--bs-gutter-x));
    padding-left: calc(0.5 * var(--bs-gutter-x));

    padding-bottom: 20px;

    .dish-selector-container {
        .dish-selector-col {
            padding: 0;

            .dish-selector {
                display: inline-block;
                position: relative;
                padding: 15px;
            }

            &:last-child {}
        }
    }
}
</style>
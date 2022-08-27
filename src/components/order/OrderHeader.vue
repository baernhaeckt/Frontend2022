<template>
    <div class="top-bar">
        <router-link to="/">&laquo; Zurück</router-link>
    </div>
    <div class="order-header">
        <b-row class="dish-selector-container">
            <b-col class="dish-selector-col">
                <a class="dish-selector">
                    <AnimateContent :delay="0" :enableClickAnimation="haveOrder">
                        <Salad viewBox="0 0 512 512" />
                        <Salad viewBox="0 0 512 512" class="filter-overlay" />
                    </AnimateContent>
                </a>
            </b-col>
            <b-col class="dish-selector-col">
                <a class="dish-selector">
                    <AnimateContent :delay="150" :enableClickAnimation="haveOrder">
                        <Cubes viewBox="0 0 512 512" />
                        <Cubes viewBox="0 0 512 512" class="filter-overlay" />
                    </AnimateContent>
                </a>
            </b-col>
            <b-col class="dish-selector-col">
                <a class="dish-selector">
                    <AnimateContent :delay="300" :enableClickAnimation="haveOrder">
                        <IceCream viewBox="0 0 512 512" />
                        <IceCream viewBox="0 0 512 512" class="filter-overlay" />
                    </AnimateContent>
                </a>
            </b-col>
            <b-col class="dish-selector-col">
                <a class="dish-selector">
                    <AnimateContent :delay="450" :enableClickAnimation="haveOrder">
                        <Drink />
                        <Drink class="filter-overlay" />
                    </AnimateContent>
                </a>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { toRefs, ref } from 'vue';
import { RouterLink } from "vue-router";

import Salad from '$icons/salad.svg'
import Cubes from '$icons/cubes.svg'
import IceCream from '$icons/ice-cream.svg'
import Drink from '$icons/drink.svg'

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
        RouterLink,
        Salad,
        Cubes,
        IceCream,
        Drink
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

                .filter-overlay {
                    filter: brightness(0) saturate(100%) invert(71%) sepia(73%) saturate(433%) hue-rotate(40deg) brightness(88%) contrast(95%) opacity(15%);
                    display: block;
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                }
            }

            &:last-child {}
        }
    }
}
</style>
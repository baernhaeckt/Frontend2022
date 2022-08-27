<template>
    <div class="top-bar">
        <router-link to="/">&laquo; Zurück</router-link>
    </div>
    <div class="order-header">
        <b-row class="dish-selector-container">
            <b-col class="dish-selector-col">
                <a class="dish-selector">
                    <DishSalad :enableClickAnimation="true" @click="() => toggleDishType('Bowl')"></DishSalad>
                    <CheckMarkIcon v-if="deselectedDishTypes.indexOf('Bowl') < 0" class="state-icon"></CheckMarkIcon>
                    <CrossIcon v-else class="state-icon"></CrossIcon>
                </a>
            </b-col>
            <b-col class="dish-selector-col">
                <a class="dish-selector">
                    <DishCubes :enableClickAnimation="true" @click="() => toggleDishType('PotatoCubes')"></DishCubes>
                    <CheckMarkIcon v-if="deselectedDishTypes.indexOf('PotatoCubes') < 0" class="state-icon">
                    </CheckMarkIcon>
                    <CrossIcon v-else class="state-icon"></CrossIcon>
                </a>
            </b-col>
            <b-col class="dish-selector-col">
                <a class="dish-selector">
                    <DishIce :enableClickAnimation="true" @click="() => toggleDishType('Ice')"></DishIce>
                    <CheckMarkIcon v-if="deselectedDishTypes.indexOf('Ice') < 0" class="state-icon"></CheckMarkIcon>
                    <CrossIcon v-else class="state-icon"></CrossIcon>
                </a>
            </b-col>
            <b-col class="dish-selector-col">
                <a class="dish-selector">
                    <DishDrink :enableClickAnimation="true" @click="() => toggleDishType('Smoothies')"></DishDrink>
                    <CheckMarkIcon v-if="deselectedDishTypes.indexOf('Smoothies') < 0" class="state-icon">
                    </CheckMarkIcon>
                    <CrossIcon v-else class="state-icon"></CrossIcon>
                </a>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { toRefs, ref } from 'vue';
import { RouterLink } from "vue-router";

import CheckMarkIcon from "$icons/check-mark.svg"
import CrossIcon from "$icons/cancel.svg"

export default {
    setup() {

        const deselectedDishTypes = ref([])

        return {
            deselectedDishTypes
        }
    },
    computed: {
        haveOrder() {
            return this.currentOrder !== null && this.currentOrder !== undefined
        }
    },
    methods: {
        toggleDishType(dishType) {
            const itemIndex = this.deselectedDishTypes.indexOf(dishType)
            if (itemIndex >= 0) {
                this.deselectedDishTypes.splice(itemIndex, 1)
            } else {
                this.deselectedDishTypes.push(dishType)
            }

            this.$emit('deselected-dishtypes:change', this.deselectedDishTypes)
        }
    },
    components: {
        RouterLink,
        CheckMarkIcon,
        CrossIcon
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

                cursor: pointer;

                .state-icon {
                    width: 30px;
                    height: 30px;

                    position: absolute;
                    bottom: 5px;
                    right: 5px;
                }
            }

            &:last-child {}
        }
    }
}
</style>
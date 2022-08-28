<template>
    <div class="order-header">
        <b-row :class="['dish-selector-container', { 'selector': dishtypeSelector }]">
            <b-col class="dish-selector-col">
                <a :class="['dish-selector', { 'active': dishtypeSelector && selectedDishType === 'Bowl' }]">
                    <DishSalad :enableClickAnimation="true" @click="() => toggleDishType('Bowl')"></DishSalad>
                    <template v-if="!dishtypeSelector">
                        <CheckMarkIcon v-if="deselectedDishTypes.indexOf('Bowl') < 0" class="state-icon">
                        </CheckMarkIcon>
                        <CrossIcon v-else class="state-icon"></CrossIcon>
                    </template>
                </a>
            </b-col>
            <b-col class="dish-selector-col">
                <a :class="['dish-selector', { 'active': dishtypeSelector && selectedDishType === 'PotatoCubes' }]">
                    <DishCubes :enableClickAnimation="true" @click="() => toggleDishType('PotatoCubes')"></DishCubes>
                    <template v-if="!dishtypeSelector">
                        <CheckMarkIcon v-if="deselectedDishTypes.indexOf('PotatoCubes') < 0" class="state-icon">
                        </CheckMarkIcon>
                        <CrossIcon v-else class="state-icon"></CrossIcon>
                    </template>
                </a>
            </b-col>
            <b-col class="dish-selector-col">
                <a :class="['dish-selector', { 'active': dishtypeSelector && selectedDishType === 'Ice' }]">
                    <DishIce :enableClickAnimation="true" @click="() => toggleDishType('Ice')"></DishIce>
                    <template v-if="!dishtypeSelector">
                        <CheckMarkIcon v-if="deselectedDishTypes.indexOf('Ice') < 0" class="state-icon"></CheckMarkIcon>
                        <CrossIcon v-else class="state-icon"></CrossIcon>
                    </template>
                </a>
            </b-col>
            <b-col class="dish-selector-col">
                <a :class="['dish-selector', { 'active': dishtypeSelector && selectedDishType === 'Smoothies' }]">
                    <DishDrink :enableClickAnimation="true" @click="() => toggleDishType('Smoothies')"></DishDrink>
                    <template v-if="!dishtypeSelector">
                        <CheckMarkIcon v-if="deselectedDishTypes.indexOf('Smoothies') < 0" class="state-icon">
                        </CheckMarkIcon>
                        <CrossIcon v-else class="state-icon"></CrossIcon>
                    </template>
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
    emits: ['deselected-dishtypes:change', 'dishtype:change'],
    props: {
        dishtypeSelector: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const { dishtypeSelector } = toRefs(props)
        const deselectedDishTypes = ref([])
        const selectedDishType = ref('Bowl')

        return {
            dishtypeSelector,
            selectedDishType,
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

            this.selectedDishType = dishType

            this.$emit('deselected-dishtypes:change', this.deselectedDishTypes)
            this.$emit('dishtype:change', dishType)
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
        }

        &.selector {
            .dish-selector {
                .filter-overlay {
                    filter: brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(6222%) hue-rotate(296deg) brightness(88%) contrast(79%) opacity(80%);
                }

                &.active {
                    .filter-overlay {
                        filter: brightness(0) saturate(100%) invert(71%) sepia(73%) saturate(433%) hue-rotate(40deg) brightness(88%) contrast(95%) opacity(15%);
                    }
                }
            }
        }
    }
}
</style>
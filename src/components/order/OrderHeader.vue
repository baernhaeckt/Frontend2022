<template>
    <div class="order-header">
        <b-row class="dish-selector-container">
            <b-col class="dish-selector-col">
                <a class="dish-selector">
                    <AnimateContent :delay="0">
                        <Salad viewBox="0 0 512 512" />
                    </AnimateContent>
                </a>
            </b-col>
            <b-col class="dish-selector-col">
                <a class="dish-selector">
                    <AnimateContent :delay="150">
                        <Cubes viewBox="0 0 512 512" />
                    </AnimateContent>
                </a>
            </b-col>
            <b-col class="dish-selector-col">
                <a class="dish-selector">
                    <AnimateContent :delay="300">
                        <IceCream viewBox="0 0 512 512" />
                    </AnimateContent>
                </a>
            </b-col>
            <b-col class="dish-selector-col">
                <a class="dish-selector">
                    <AnimateContent :delay="450">
                        <Drink />
                    </AnimateContent>
                </a>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { toRefs, ref } from 'vue';

import Salad from '$icons/salad.svg'
import Cubes from '$icons/cubes.svg'
import IceCream from '$icons/ice-cream.svg'
import Drink from '$icons/drink.svg'

export default {
    props: {
        currentOrder: Object
    },
    setup(props) {
        const { currentOrder } = toRefs(props)

        return {
            currentOrder
        }
    },
    components: {
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
                padding: 15px;
            }

            &:last-child {}
        }
    }
}
</style>
<template>
    <div class="order-header">
        <b-row class="dish-selector-container">
            <b-col class="dish-selector-col">
                <b-button class="dish-selector">
                    <AnimateContent :delay="0">
                        <Salad viewBox="0 0 512 512" />
                    </AnimateContent>
                </b-button>
            </b-col>
            <b-col class="dish-selector-col">
                <b-button class="dish-selector">
                    <AnimateContent :delay="150">
                        <Cubes viewBox="0 0 512 512" />
                    </AnimateContent>
                </b-button>
            </b-col>
            <b-col class="dish-selector-col">
                <b-button class="dish-selector">
                    <AnimateContent :delay="300">
                        <IceCream viewBox="0 0 512 512" />
                    </AnimateContent>
                </b-button>
            </b-col>
            <b-col class="dish-selector-col">
                <b-button class="dish-selector">
                    <AnimateContent :delay="450">
                        <IceCream viewBox="0 0 512 512" />
                    </AnimateContent>
                </b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { toRefs, ref } from 'vue';

import Salad from '$icons/salad.svg'
import Cubes from '$icons/cubes.svg'
import IceCream from '$icons/ice-cream.svg'

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
        IceCream
    }
}
</script>

<style lang="scss">
.order-header {
    .dish-selector-container {
        border-bottom: 1px solid var(--bs-primary);

        .dish-selector-col {
            border-right: 1px solid var(--bs-primary);

            .dish-selector {
                border: none;
                border-radius: 0;
            }

            &:last-child {
                border-right: none;
            }
        }
    }
}
</style>
<template>
    <div class="dish-salad">
        <AnimateContent :delay="0" :enableClickAnimation="enableClickAnimation">
            <Salad viewBox="0 0 512 512" />
            <Salad viewBox="0 0 512 512" class="filter-overlay" />
        </AnimateContent>
    </div>
</template>

<script>
import { toRefs } from 'vue';

import Salad from '$icons/salad.svg'
import Cubes from '$icons/cubes.svg'
import IceCream from '$icons/ice-cream.svg'
import Drink from '$icons/drink.svg'

export default {
    props: {
        enableClickAnimation: {
            Type: Object,
            default: null
        }
    },
    setup(props) {
        const { enableClickAnimation } = toRefs(props)

        return {
            enableClickAnimation
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
.dish-salad {
    position: relative;

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
</style>
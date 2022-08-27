<template>
    <NutritionCarrot v-if="ingridientIconName === '🥕'"></NutritionCarrot>
    <NutritionAvocado v-if="ingridientIconName === '🥑'"></NutritionAvocado>
    <NutritionMushroom v-if="ingridientIconName === '🍄'"></NutritionMushroom>
    <NutritionPotato v-if="ingridientIconName === '🥔'"></NutritionPotato>
    <NutritionVanilla v-if="ingridientIconName === '🍨'"></NutritionVanilla>
    <NutritionBroccoli v-if="ingridientIconName === '🥦'"></NutritionBroccoli>
    <NutritionCucumber v-if="ingridientIconName === '🥒'"></NutritionCucumber>
    <NutritionTomato v-if="ingridientIconName === '🍅'"></NutritionTomato>
    <NutritionApple v-if="ingridientIconName === '🍎'"></NutritionApple>
    <NutritionChickPea v-if="ingridientIconName === 'chickpea'"></NutritionChickPea>
    <NutritionQuinoa v-if="ingridientIconName === 'quinoa'"></NutritionQuinoa>
    <NutritionRice v-if="ingridientIconName === '🍚'"></NutritionRice>
</template>

<script>
import { toRefs } from "vue"

import NutritionCarrot from '$icons/035-carrot.svg'
import NutritionAvocado from '$icons/056-avocado.svg'
import NutritionMushroom from '$icons/mushroom.svg'
import NutritionPotato from '$icons/013-potato.svg'
import NutritionVanilla from '$icons/vanilla.svg'
import NutritionBroccoli from '$icons/025-broccoli.svg'
import NutritionCucumber from '$icons/004-cucumber.svg'
import NutritionTomato from '$icons/003-tomato.svg'
import NutritionApple from '$icons/001-apple.svg'
import NutritionChickPea from '$icons/chickpea.svg'
import NutritionQuinoa from '$icons/quinoa.svg'
import NutritionRice from '$icons/brown-rice.svg'

export default {
    props: {
        ingridientIconName: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const { ingridientIconName } = toRefs(props)

        return {
            ingridientIconName
        }
    },
    components: {
        NutritionCarrot,
        NutritionAvocado,
        NutritionMushroom,
        NutritionPotato,
        NutritionVanilla,
        NutritionBroccoli,
        NutritionCucumber,
        NutritionTomato,
        NutritionApple,
        NutritionChickPea,
        NutritionQuinoa,
        NutritionRice,
    }
}
</script>
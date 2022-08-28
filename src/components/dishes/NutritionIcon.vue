<template>
    <NutritionCarrot v-if="ingridientIconName === 'karotten'"></NutritionCarrot>
    <NutritionAvocado v-if="ingridientIconName === 'avocado'"></NutritionAvocado>
    <NutritionMushroom v-if="ingridientIconName === 'grilledchampions'"></NutritionMushroom>
    <NutritionPotato v-if="ingridientIconName === 'kartoffeln'"></NutritionPotato>
    <NutritionVanilla v-if="ingridientIconName === '🍨'"></NutritionVanilla>
    <NutritionBroccoli v-if="ingridientIconName === 'brokkoli'"></NutritionBroccoli>
    <NutritionCucumber v-if="ingridientIconName === 'gurken'"></NutritionCucumber>
    <NutritionTomato v-if="ingridientIconName === 'tomaten'"></NutritionTomato>
    <NutritionApple v-if="ingridientIconName === 'apfel'"></NutritionApple>
    <NutritionChickPea v-if="ingridientIconName === 'kichererbsen'"></NutritionChickPea>
    <NutritionQuinoa v-if="ingridientIconName === 'quinoa'"></NutritionQuinoa>
    <NutritionRice v-if="ingridientIconName === 'reis'"></NutritionRice>
    <NutritionCubes v-if="ingridientIconName === 'cubes'" viewBox="0 0 512 512"></NutritionCubes>
    <NutritionGinger v-if="ingridientIconName === 'ingwer'"></NutritionGinger>
    <NutritionOrange v-if="ingridientIconName === 'orangen'"></NutritionOrange>
    <NutritionLemon v-if="ingridientIconName === 'zitronen'"></NutritionLemon>
    <NutritionBanana v-if="ingridientIconName === 'bananeneis'"></NutritionBanana>
    <NutritionBerries v-if="ingridientIconName === 'beerenmischung'"></NutritionBerries>
    <NutritionPeaProtein v-if="ingridientIconName === 'erbsenprotein'"></NutritionPeaProtein>
    <NutritionHazelnut v-if="ingridientIconName === 'haselnüsse'"></NutritionHazelnut>
    <NutritionBellPepper v-if="ingridientIconName === 'grilledpepperoni'"></NutritionBellPepper>
    <NutritionSalad v-if="ingridientIconName === 'gruenersalat'"></NutritionSalad>
    <NutritionFeta v-if="ingridientIconName === 'fetakaese'" viewBox="0 0 512 512"></NutritionFeta>
    <NutritionCauliflower v-if="ingridientIconName === 'blumenkohl'"></NutritionCauliflower>
    <NutritionWalnut v-if="ingridientIconName === 'baumnuesse'" viewBox="0 0 512 512"></NutritionWalnut>
    <NutritionPeas v-if="ingridientIconName === 'erbsen'"></NutritionPeas>
    <NutritionSalmon v-if="ingridientIconName === 'karottenlachs'" viewBox="0 0 512 512"></NutritionSalmon>
    <NutritionAlmonds v-if="ingridientIconName === 'mandeln'"></NutritionAlmonds>
    <NutritionOlives v-if="ingridientIconName === 'oliven'"></NutritionOlives>
    <NutritionTofu v-if="ingridientIconName === 'plantedchicken'"></NutritionTofu>
    <NutritionBeet v-if="ingridientIconName === 'randen'"></NutritionBeet>
    <NutritionSunflowerSeeds v-if="ingridientIconName === 'sonnenblumenkernekürbiskerne'"></NutritionSunflowerSeeds>
    <NutritionZucchini v-if="ingridientIconName === 'zucchini'"></NutritionZucchini>
    <NutritionOnion v-if="ingridientIconName === 'zwiebeln'"></NutritionOnion>
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
import NutritionCubes from '$icons/cubes.svg'
import NutritionGinger from '$icons/ginger.svg'
import NutritionOrange from '$icons/034-orange.svg'
import NutritionLemon from '$icons/045-lemon.svg'
import NutritionBanana from '$icons/014-banana.svg'
import NutritionBerries from '$icons/berries.svg'
import NutritionPeaProtein from '$icons/mashed-potatoes.svg'
import NutritionHazelnut from '$icons/hazelnut.svg'
import NutritionBellPepper from '$icons/009-bell-pepper.svg'
import NutritionSalad from '$icons/green-salad.svg'
import NutritionFeta from '$icons/feta.svg'
import NutritionCauliflower from '$icons/027-cauliflower.svg'
import NutritionWalnut from '$icons/walnut.svg'
import NutritionPeas from '$icons/033-peas.svg'
import NutritionSalmon from '$icons/salmon.svg'
import NutritionAlmonds from '$icons/almonds.svg'
import NutritionOlives from '$icons/026-olives.svg'
import NutritionTofu from '$icons/tofu.svg'
import NutritionBeet from '$icons/037-beet.svg'
import NutritionSunflowerSeeds from '$icons/sunflower-seed.svg'
import NutritionZucchini from '$icons/038-zucchini.svg'
import NutritionOnion from '$icons/onion.svg'

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
        NutritionCubes,
        NutritionGinger,
        NutritionOrange,
        NutritionLemon,
        NutritionBanana,
        NutritionBerries,
        NutritionPeaProtein,
        NutritionHazelnut,
        NutritionBellPepper,
        NutritionSalad,
        NutritionFeta,
        NutritionCauliflower,
        NutritionWalnut,
        NutritionPeas,
        NutritionSalmon,
        NutritionAlmonds,
        NutritionOlives,
        NutritionTofu,
        NutritionBeet,
        NutritionSunflowerSeeds,
        NutritionZucchini,
        NutritionOnion
    }
}
</script>
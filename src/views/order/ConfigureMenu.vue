<template>
    <div class="mb-5">
        <div class="top-bar">
            <router-link to="/order">&laquo; Zurück</router-link>
        </div>

        <OrderHeader dishtypeSelector @dishtype:change="dishTypeChanged"></OrderHeader>

        <div v-if="isLoading" class="d-flex justify-content-center">
            <div class="mt-5">
                <b-spinner style="width: 3rem; height: 3rem;" variant="primary"></b-spinner>
            </div>
        </div>
        <b-row v-else class="select-menu mb-5">
            <b-col :cols="3" v-for="(ingredient, ingredientIndex) in ingredientsList"
                :v-key="`Ingredient_${ingredientIndex}`" class="mb-3">
                <b-card variant="dark" class="ingredient-card">
                    <b-card-body>
                        <NutritionIcon :ingridientIconName="ingredient.icon"></NutritionIcon>
                        <CheckMarkIcon v-if="isIngredientInCurrentDish(ingredient.name)" class="state-icon">
                        </CheckMarkIcon>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <div class="clearfix">
            <b-button variant="primary" to="/order/payment" class="float-end">Weiter zur Zahlung &raquo;</b-button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

import { loadIngredientsForDish } from '@/services/ingredients-service'
import { useOrderStore } from '@/stores/order'

import CheckMarkIcon from "$icons/check-mark.svg"
import router from '../../router'

export default {
    setup() {
        const isLoading = ref(false)
        const ingredientsList = ref([])
        const selectedDishType = ref('Bowl')

        const orderStore = useOrderStore()

        return {
            orderStore,

            isLoading,
            ingredientsList,
            selectedDishType
        }
    },
    components: {
        CheckMarkIcon
    },
    computed: {
        currentOrder() {
            return this.orderStore.currentOrder
        }
    },
    methods: {
        isIngredientInCurrentDish(ingredientName) {
            const dish = this.currentOrder.dishes.find(d => d.dishType === this.selectedDishType)
            if (dish === null || dish === undefined) {
                return false
            }

            const foundIngredient = dish.ingredients.find(i => i.name === ingredientName)
            return foundIngredient !== null && foundIngredient !== undefined
        },
        async dishTypeChanged(dishType) {
            this.selectedDishType = dishType
            await this.loadIngredients(dishType)
        },
        async loadIngredients(dishType) {
            this.isLoading = true
            this.ingredientsList = await loadIngredientsForDish(dishType)
            this.isLoading = false
        },
        async changeDish(dish) {
            this.orderStore.storeCurrentOrder(dish)
            await this.loadIngredients(dish)
        }
    },
    async mounted() {
        if (this.currentOrder === null || this.currentOrder === undefined) {
            router.push("/order")
        }
        await this.loadIngredients(this.selectedDishType)
    }
}
</script>

<style lang="scss">
.ingredient-card {
    .card-body {
        padding: 0;

        >.card-body {
            padding: 4px;

            .state-icon {
                width: 40px;
                height: 40px;

                position: absolute;
                bottom: 0;
                right: 0;
            }
        }
    }
}
</style>
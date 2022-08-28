<template>
    <div class="mb-5 order-configuration">
        <div class="top-bar mt-3 mb-2">
            <b-button variant="dark" to="/order">&laquo; Zurück</b-button>
        </div>

        <OrderHeader dishtypeSelector @dishtype:change="dishTypeChanged"></OrderHeader>

        <div v-if="isLoading" class="d-flex justify-content-center">
            <div class="mt-5">
                <b-spinner style="width: 3rem; height: 3rem;" variant="primary"></b-spinner>
            </div>
        </div>
        <b-row v-else class="select-menu">
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

        <div class="fixed-bottom clearfix order-actions">
            <span class="price-display">{{ calculatePrice() }} CHF</span>
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
        calculatePrice() {
            var price = 0
            for (let index = 0; index < this.currentOrder.dishes.length; index++) {
                const ingredientCount = this.currentOrder.dishes[index].ingredients.length

                price += 3 * ingredientCount
            }

            return price.toFixed(2)
        },
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
.order-configuration {
    .select-menu {
        margin-bottom: 50px;
    }

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

    .order-actions {
        padding: 25px 15px 15px 15px;

        background: rgb(30, 25, 26);
        background: linear-gradient(180deg, rgba(30, 25, 26, 1) 10%, rgba(127, 202, 49, 1) 15%, rgba(30, 25, 26, 1) 15%);

        .price-display {
            color: #7fca31;
            font-size: 1.5em;
        }
    }
}
</style>
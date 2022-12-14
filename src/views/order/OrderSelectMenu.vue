<template>
  <div>
    <div class="top-bar mt-3 mb-2">
      <b-button variant="dark" to="/">&laquo; Zurück</b-button>
    </div>

    <OrderHeader @deselected-dishtypes:change="deselectedDishTypeChanged"></OrderHeader>
    <div v-if="isLoading" class="d-flex justify-content-center">
      <div class="mt-5">
        <b-spinner style="width: 3rem; height: 3rem;" variant="primary"></b-spinner>
      </div>
    </div>
    <b-row v-else class="select-menu">
      <b-col>
        <b-card-group v-for="(recommendationLine, groupIndex) in groupBy(menuRecommendations.menus, 2)"
          :key="`RecGroup${groupIndex}`">
          <b-card bg-variant="dark" v-for="(recommendation, groupItemIndex) in recommendationLine"
            :key="`RecItem${groupIndex}_${groupItemIndex}`">
            <b-card-body>
              <h3 class="h5 mb-2">{{ recommendation.name }}</h3>
              <b-row>
                <b-col :cols="8">
                  <b-row v-for="(dish, dishIndex) in sortDishes(recommendation.dishes)"
                    :key="`DishDescription${groupIndex}_${groupItemIndex}_${dishIndex}`" class="mb-2">
                    <b-col :cols="3">
                      <DishSalad v-if="dish.dishType === 'Bowl'"></DishSalad>
                      <DishCubes v-if="dish.dishType === 'PotatoCubes'"></DishCubes>
                      <DishIce v-if="dish.dishType === 'Ice'"></DishIce>
                      <DishDrink v-if="dish.dishType === 'Smoothies'"></DishDrink>
                    </b-col>
                    <b-col :cols="9">
                      <div class="dish-ingridients">
                        <NutritionIcon v-for="(ingredient, ingredientIndex) in dish.ingredients"
                          :key="`IngredientIcon${groupIndex}_${groupItemIndex}_${dishIndex}_${ingredientIndex}`"
                          :ingridientIconName="ingredient.icon"></NutritionIcon>
                      </div>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col :cols="4">
                  <NutritionScore v-if="recommendation.dishes" :label="nutritionScore.label"
                    :value="nutritionScore.value" :maximum="nutritionScore.maximum" :optimum="nutritionScore.optimum"
                    v-for="(nutritionScore, scoreIndex) in calculateNutritionScores(recommendation.dishes, menuRecommendations.dailyDemand, menuRecommendations.dailyInTake)"
                    :key="`NutriScore${groupIndex}${groupItemIndex}${scoreIndex}`"></NutritionScore>
                </b-col>
              </b-row>
              <div class="cart-next-step">
                <span class="price-display">{{ calculatePrice(recommendation) }} CHF</span>
                <b-button variant="link" @click="() => checkoutItem(recommendation)">
                  <NextStep></NextStep>
                </b-button>
              </div>
            </b-card-body>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { useOrderStore } from "@/stores/order"
import { storeToRefs } from "pinia"
import { ref } from "vue"
import { recommendMenu } from "../../services/recommend-service"

import NextStep from "$icons/add-to-basket.svg"
import router from "../../router"

export default {
  setup() {
    const orderStore = useOrderStore()

    const { currentOrder } = storeToRefs(orderStore.currentOrder)
    const exceptDishTypes = ref([])
    const menuRecommendations = ref([])
    const isLoading = ref(false)

    return {
      orderStore,

      isLoading,
      currentOrder,
      exceptDishTypes,
      menuRecommendations
    }
  },
  components: {
    NextStep
  },
  methods: {
    calculatePrice(menu) {
      var price = 0
      for (let index = 0; index < menu.dishes.length; index++) {
        const ingredientCount = menu.dishes[index].ingredients.length

        price += 3 * ingredientCount
      }

      return price.toFixed(2)
    },
    deselectedDishTypeChanged(newDeselectedDishTypes) {
      this.exceptDishTypes = newDeselectedDishTypes
      this.loadMenuRecommendations()
    },
    async loadMenuRecommendations() {
      this.isLoading = true
      const result = await recommendMenu(this.exceptDishTypes)
      this.menuRecommendations = result
      this.isLoading = false
    },
    groupBy(data = [], itemsPerGroup = 3) {
      if (data == undefined || data === null || data.lengt === 0) {
        return [[]]
      }

      const result = data.reduce((groups, item) => {
        if (groups[groups.length - 1].length == itemsPerGroup) {
          groups.push([item])
        } else {
          groups[groups.length - 1].push(item)
        }

        return groups
      }, [[]])

      return result
    },
    sortDishes(data) {
      return data.map(x => Object.assign({ sort: this.calculateSort(x) }, x)).sort((a, b) => a.sort - b.sort)
    },
    calculateSort(dish) {
      if (dish.dishType === 'Bowl') {
        return 1
      } else if (dish.dishType === 'PotatoCubes') {
        return 2
      } else if (dish.dishType === 'Ice') {
        return 3
      } else {
        return 4
      }
    },
    calculateNutritionScores(dishes, dailyDemand = {}, dailyIntake = {}) {
      var result = [
        this.calculateNutritionModel(dishes, x => x.calories, dailyDemand.calories - dailyIntake.calories, dailyDemand.calories, 'kCal'),
        this.calculateNutritionModel(dishes, x => x.carbohydrates, dailyDemand.carbohydrates - dailyIntake.carbohydrates, dailyDemand.carbohydrates, 'KH'),
        this.calculateNutritionModel(dishes, x => x.fat, dailyDemand.fat - dailyIntake.fat, dailyDemand.fat, 'Fe'),
        this.calculateNutritionModel(dishes, x => x.proteins, dailyDemand.proteins - dailyIntake.proteins, dailyDemand.proteins, 'Prot')
      ]
      return result;
    },
    calculateNutritionModel(dishes, valueSelector, optimumValue, maximumValue, label) {
      var result = dishes.reduce((nutritionData, dish) => {
        const dishValue = dish.ingredients.reduce((sum, ingredience) => sum + valueSelector(ingredience), 0)
        nutritionData.value = (nutritionData.value || 0) + dishValue
        nutritionData.maximum = maximumValue
        nutritionData.optimum = optimumValue

        return nutritionData
      }, {
        label: label,
        maximum: maximumValue,
        optimum: optimumValue
      })

      return result;
    },
    checkoutItem(itemToCheckout) {
      this.orderStore.storeCurrentOrder(itemToCheckout)

      router.push('/order/configuremenu')
    }
  },
  async mounted() {
    await this.loadMenuRecommendations()
  }
}
</script>

<stype lang="scss">
.select-menu {
  .dish-ingridients {
    svg {
      width: 20px;
      height: 20px;
      margin: 5px 2px 5px 0;
    }
  }

  .cart-next-step {
    position: absolute;
    top: 10px;
    right: 18px;

    .price-display {
      padding-top: 7px;
      color: #7fca31;
      font-weight: 500;
    }

    svg {
      width: 35px;
      height: 35px;
    }
  }
}
</stype>

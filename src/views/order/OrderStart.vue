<template>
  <div>
    <OrderHeader :order="currentOrder"></OrderHeader>
    <div v-if="isLoading" class="d-flex justify-content-center">
      <div class="mt-5">
        <b-spinner style="width: 3rem; height: 3rem;" variant="primary"></b-spinner>
      </div>
    </div>
    <b-row v-else>
      <b-col>
        <b-card-group v-for="(recommendationLine, groupIndex) in groupBy(menuRecommendations, 3)"
          :key="`RecGroup${groupIndex}`">
          <b-card bg-variant="dark" v-for="(recommendation, groupItemIndex) in recommendationLine"
            :key="`RecItem${groupItemIndex}`">
            <b-card-body>
              {{ recommendation.name }}
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
  methods: {
    async loadMenuRecommendations() {
      this.isLoading = true
      const result = await recommendMenu(this.exceptDishTypes)
      this.menuRecommendations = result.menus
      this.isLoading = false
    },
    groupBy(data = [], itemsPerGroup = 3) {
      const result = data.reduce((groups, item) => {
        if (groups[groups.length - 1].length == itemsPerGroup) {
          groups.push([item])
        } else {
          groups[groups.length - 1].push(item)
        }

        return groups
      }, [[]])

      return result
    }
  },
  mounted() {
    this.loadMenuRecommendations()
  },
  watch: {
    'exceptDishTypes': () => {
      this.loadMenuRecommendations()
    }
  }
}
</script>

<stype lang="scss">
</stype>

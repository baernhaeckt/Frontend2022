<template>
  <div>
    <OrderHeader :order="currentOrder"></OrderHeader>
    <b-row>
      <b-col v-for="rec in menuRecommendations" :key="rec.name">
        <pre>{{ rec }}</pre>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { useOrderStore } from "@/stores/order"
import { ref } from "vue"
import { recommendMenu } from "../../services/recommend-service"

export default {
  setup() {
    const orderStore = useOrderStore()

    const currentOrder = orderStore.currentOrder
    const exceptDishTypes = ref([])

    return {
      orderStore,

      currentOrder,
      exceptDishTypes
    }
  },
  computed: {
    menuRecommendations() {
      return recommendMenu(this.exceptDishTypes)
    }
  }
}
</script>

<stype lang="scss">
</stype>

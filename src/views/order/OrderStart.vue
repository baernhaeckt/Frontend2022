<template>
  <div>
    <OrderHeader :order="currentOrder"></OrderHeader>
  </div>
</template>

<script>
import { useOrderStore } from "@/stores/order"

export default {
  setup() {
    const orderStore = useOrderStore()

    const currentOrder = orderStore.currentOrder

    return {
      currentOrder
    }
  }
}
</script>

<stype lang="scss">
</stype>

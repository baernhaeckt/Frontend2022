import { defineStore } from "pinia";
import { ref } from "vue";


export const useOrderStore = defineStore("order", {
  state: () => {
    return {
      currentOrder: null
    }
  },
  actions: {
    storeCurrentOrder(currentOrder) {
      this.currentOrder = currentOrder;
    },
    removeCurrentOrder() {
      this.currentOrder = null
    }
  }
});

import { defineStore } from "pinia";
import { ref } from "vue";


export const useOrderStore = defineStore("order", {
  state: () => {
    return {
      currentOrder: null
    }
  },
  actions: {
    storeSelectedItem(selectedItem) {
      this.currentOrder = selectedItem;
    },
    removeCurrentOrder() {
      this.currentOrder = null
    }
  }
});

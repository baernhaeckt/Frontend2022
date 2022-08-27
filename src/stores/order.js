import { defineStore } from "pinia";
import { ref } from "vue";


export const useOrderStore = defineStore("order", () => {

  const currentOrder = ref({})

  return {
    currentOrder
  };
});

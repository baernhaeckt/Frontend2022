import { defineStore } from "pinia";
import { defaults } from "mande";
import { registerUser } from "../services/user-service";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      authToken: ref(localStorage.getItem("auth-token")),
      returnUrl: ref('')
    }
  },
  getters: {
    isAuthenticated: (state) => state.authToken !== null && state.authToken.length > 0
  },
  actions: {
    async tryRegister(email) {
      var result = await registerUser(email)

      if (!result.token) {
        return false
      }

      localStorage.setItem("auth-token", result.token)
      this.authToken = result.token
      defaults.headers.Authorization = `bearer ${result.token}`

      return true;
    },
    logout() {
      localStorage.removeItem("auth-token")
      this.authToken = null
      defaults.headers.Authorization = ''
    }
  }
})

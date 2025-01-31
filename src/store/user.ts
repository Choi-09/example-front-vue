import { defineStore } from 'pinia'
import type { User } from '@/types/user'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    isLoggedIn: false
  }),

  getters: {
    userName: state => state.user?.name
  },

  actions: {
    setUser(user: User) {
      this.user = user
      this.isLoggedIn = true
    },

    logout() {
      this.user = null
      this.isLoggedIn = false
    }
  }
})

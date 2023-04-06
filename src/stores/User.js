import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
        id: null,
        pw: null
    }
  },
  getters: {
    getId(state) {
       return state.id
    },
    getPw(state) {
       return state.pw
    },
  },
  actions: {
    setIdPw( id, pw ) {
        this.id = id,
        this.pw = pw
    },
  },
});
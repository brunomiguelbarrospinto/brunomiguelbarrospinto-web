// stores/counter.js
import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => {
    return { count: 1 };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

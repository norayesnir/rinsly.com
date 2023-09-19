import { defineStore } from "pinia";

export const useNavigationMenuStore = defineStore("navigationMenu", {
  state: () => ({
    navigationState: false,
  }),

  actions: {
    toggleNavigation() {
      // Toggle navigationState
      this.navigationState = !this.navigationState;
    },
  },
});

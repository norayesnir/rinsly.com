import { defineStore } from "pinia";

export const useNavigationMenuStore = defineStore("navigationMenu", {
  state: () => ({
    navigationState: false,
    menuItemState: false,
  }),

  actions: {
    toggleNavigation() {
      // Toggle navigationState
      this.navigationState = !this.navigationState;
    },

    toggleMenuItem(){
      // Toggle routeState (if it has children)
      this.menuItemState = !this.menuItemState;
    }
  },
});

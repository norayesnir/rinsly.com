import { defineStore } from "pinia";

export const useAppearance = defineStore("appearance", {
  state: () => ({
    appearanceState: false,
    prefersDarkScheme: 'dark-mode',
  }),

  actions: {
    toggleAppearance() {
      this.appearanceState = !this.appearanceState;
      const rootElement = document.querySelector(':root');
      rootElement?.classList.toggle('light-mode');

      if (!this.appearanceState) {
        rootElement?.classList.add('dark-mode');
      } else {
        rootElement?.classList.remove('dark-mode');
      }
    },
  },
});

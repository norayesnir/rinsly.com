import { defineStore } from "pinia";

export const useLocalisation = defineStore("localisation", {
  state: () => ({
    localisationState: 'en',
  }),
});
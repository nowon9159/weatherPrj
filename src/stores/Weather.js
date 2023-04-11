import { defineStore } from "pinia";

export const moveWeather = defineStore("weather", {
  state: () => {
    return {
      location: null,
    };
  },
  getters: {
    getLocation(state) {
      return state.location;
    },
  },
  actions: {
    setWeatherLocation(location) {
      this.location = location;
    },
  },
});

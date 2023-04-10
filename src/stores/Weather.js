import { defineStore } from "pinia";

export const moveWeather = defineStore("weather", {
  state: () => {
    return {
      latitude: null,
      longitude: null,
      timezone: null,
    };
  },
  getters: {
    getLatitude(state) {
      return state.latitude;
    },
    getLongitude(state) {
      return state.longitude;
    },
    getTimeZone(state) {
      return state.timezone;
    },
  },
  actions: {
    setWeatherConfig(latitude, longitude, timezone) {
      this.latitude = latitude,
      this.longitude = longitude,
      this.timezone = timezone;
    },
  },
});

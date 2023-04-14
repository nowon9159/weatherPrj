<template>
  <v-container>
    <v-combobox
      label="Search Location"
      :items="weatherLocationItem"
      v-model="selectedLocation"
    >
    </v-combobox>
  </v-container>
  <v-row class="mx-auto px-auto" justify="center">
    <v-btn
      class="mx-auto px-auto"
      color="blue"
      width="400px"
      @click="setLocation"
    >
      검색하기
    </v-btn>
  </v-row>
  <div>
    {{ getId }}
    {{ getPw }}
  </div>
  <div style="text-align: center; margin-top: 50px">
    {{ this.selectedLocation }}
  </div>
</template>

<script>
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true&timezone=Europe%2FLondon`;

import { mapActions } from "pinia";
import login from "@/mixins/login";

export default {
  data: () => {
    return {
      selectedLocation: "Seoul",
      getApiData: "",
      weatherApiParam: {
        losAngeles: {
          url : "America%2FLos_Angeles",
        },
        chicago: {
          url : "America%2FChicago",
        },
        newYork: {
          url : "America%2FNew_York",
        },
        seoul: {
          url : "Asia%2FTokyo",
        }
      },
      valueParam: this.
    };
  },
  methods: {
    setLocation() {
      this.setWeatherConfigOnclick();
      //this.movePageWeather()
    },
    movePageWeather() {
      this.$router.push({ path: "weather" });
    },
    ...mapActions(moveWeather, ["setWeatherLocation"]),
    setWeatherConfigOnclick() {
      this.setWeatherLocation(this.selectedLocation);
      console.log(this.selectedLocation);
    },
    getWeatherData() {
      this.axios.get(this.exApiUrl).then((result) => {
        this.weather = result.data;
      });
    },
  },
  mixins: [login],
};
</script>

<style lang="scss" scoped></style>

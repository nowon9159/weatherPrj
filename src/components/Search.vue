<template>
  <v-container>
    <v-combobox
      label="Search Location"
      :items="weatherLocationItem"
      persistent-hint
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
  
</template>

<script>
import { mapActions } from "pinia";
import { moveWeather } from "@/stores/Weather";
import login from "@/mixins/login";

export default {
  data: () => {
    return {
      selectedLocation: "Seoul",
      weatherLocationItem: ["Seoul", "Denver", "Chicago", "NewYork"],
      
    };
  },
  methods: {
    setLocation() {
      this.setWeatherConfigOnclick()
      this.movePageWeather()
    },
    movePageWeather() {
      this.$router.push({ path: 'weather'});
    },
    ...mapActions(moveWeather, ["setWeatherLocation"]),
    setWeatherConfigOnclick() {
        this.setWeatherLocation(this.selectedLocation)
        console.log(this.selectedLocation)
    },
  },
  mixins: [login]
};
</script>

<style lang="scss" scoped></style>

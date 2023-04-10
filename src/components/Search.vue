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
    <v-btn @click="debug" class="mx-3 px-auto"> 디버깅 </v-btn>
  </v-row>
</template>

<script>
import { mapActions } from "pinia";
import { moveWeather } from "@/stores/Weather";

export default {
  data: () => {
    return {
      weather: null,
      latitude: null,
      longitude: null,
      timezone: null,
      selectedLocation: "Seoul",
      weatherLocationItem: ["Seoul", "LosAngeles", "Chicago", "NewYork"],
      weatherLocation: {
        seoul: {
          latitude: "52.52",
          longitude: "13.419998",
          timezone: "Asia/Tokyo",
        },
        losAngeles: {
          latitude: "52.52",
          longitude: "13.419998",
          timezone: "America/Los_Angeles",
        },
        chicago: {
          latitude: "52.52",
          longitude: "13.419998",
          timezone: "America/Chicago",
        },
        newYork: {
          latitude: "52.52",
          longitude: "13.419998",
          timezone: "America/New_York",
        },
      },
    };
  },
  methods: {
    setLocation() {
      if (this.selectedLocation != "") {
        if (this.selectedLocation == "Seoul") {
          let loca = this.weatherLocation.seoul;
          this.setLocationInfo(loca);
          this.setWeatherConfigOnclick()
          this.movePage()
        } else if (this.selectedLocation == "LosAngeles") {
          let loca = this.weatherLocation.losAngeles;
          this.setLocationInfo(loca);
          this.setWeatherConfigOnclick()
          this.movePage()
        } else if (this.selectedLocation == "Chicago") {
          let loca = this.weatherLocation.chicago;
          this.setLocationInfo(loca);
          this.setWeatherConfigOnclick()
          this.movePage()
        } else if (this.selectedLocation == "NewYork") {
          let loca = this.weatherLocation.newYork;
          this.setLocationInfo(loca);
          this.setWeatherConfigOnclick()
          this.movePage()
        }
      }
    },
    setLocationInfo(loca) {
      let location = loca;
      this.latitude = location.latitude;
      this.longitude = location.longitude;
      this.timezone = location.timezone;
    },
    movePage() {
      this.$router.push({ path: 'weather'});
    },
    debug() {
      console.log("jewon " + this.longitude);
      console.log(this.weatherLocation.seoul.longitude);
      alert(this.latitude, this.longitude, this.timezone);
    },
    ...mapActions(moveWeather, ["setWeatherConfig"]),
    setWeatherConfigOnclick() {
        this.setWeatherConfig(this.latitude, this.longitude, this.timezone)
    }
  },
};
</script>

<style lang="scss" scoped></style>

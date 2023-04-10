<template>
  <v-card v-if="this.weather" class="mx-auto my-5 pa-4" max-width="344">
    <v-card-text>
      <v-row no-gutters>
        <v-col>
          <p class="text-h4 text--primary">서울</p>
        </v-col>
        <v-col>
          <div v-if="iconCheck == '3'">흐림</div>
          <div v-else-if="iconCheck == '0'">맑음</div>
          <div v-else-if="iconCheck == '1'">대부분 맑음</div>
          <div v-else-if="iconCheck == '2'">부분 맑음</div>
          <div v-else-if="iconCheck == '61'">비옴</div>
        </v-col>
      </v-row>
      <v-row>
        <div class="text--primary">
          <p>온도 : {{ this.weather.current_weather.temperature }}</p>
          <p>풍속 : {{ this.weather.current_weather.windspeed }}</p>
        </div>
      </v-row>
    </v-card-text>
  </v-card>
  <v-card class="mx-auto" max-width="340">
    <v-card-text>{{ this.weather }}</v-card-text>
  </v-card>
  <v-card class="mx-auto" max-width="340" :elevation="6">
    <v-card-text
      >{{ getLatitude }}
      {{ getLongitude }}
      {{ getTimeZone }}
    </v-card-text>
  </v-card>
</template>

<script>
import { Result } from "postcss";
import { moveWeather } from "@/stores/Weather.js";
import { mapState } from "pinia";

const apiUrl = `https://api.open-meteo.com/v1/forecast`;
export default {
  data: () => {
    return {
      exApiUrl:
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&timezone=Asia%2FTokyo",
      location: "Seoul",
      weather: null,
      latitude: null,
      longitude:null,
      timezone: null,
      selectedLocation: null,
      abc: null,
      weatherIcon: [
        { weather: "sunny", icon: "mdi-weather-sunny" },
        { weather: "rainy", icon: "mdi-weather-rainy" },
        { weather: "cloudy", icon: "mdi-weather-cloudy" },
      ],
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
  created() {
    this.getWeatherData();
  },
  methods: {
    getWeatherData() {
      this.axios.get(this.exApiUrl).then((result) => {
        this.weather = result.data;
      });
    },
    setLocation() {
      if (this.selectedLocation != "") {
        if (this.selectedLocation == "Seoul") {
          let loca = this.weatherLocation.seoul;
          this.setLocationInfo(loca);
        } else if (this.selectedLocation == "LosAngeles") {
          let loca = this.weatherLocation.losAngeles;
          this.setLocationInfo(loca);
        } else if (this.selectedLocation == "Chicago") {
          let loca = this.weatherLocation.chicago;
          this.setLocationInfo(loca);
        } else if (this.selectedLocation == "NewYork") {
          let loca = this.weatherLocation.newYork;
          this.setLocationInfo(loca);
        }
      }
    },
    setLocationInfo(loca) {
      let location = loca;
      this.latitude = location.latitude;
      this.longitude = location.longitude;
      this.timezone = location.timezone;
    },
    setApiUrl() {
      //https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&timezone=Asia%2FTokyo
      this.postApiUrl =
        apiUrl +
        "?latitude=" +
        this.latitude +
        "&longitude=" +
        this.longitude +
        "&current_weather=true&timezone=" +
        this.timezone;
    },
    debug() {
      console.log("123 " + this.longitude);
      console.log(this.weatherLocation.seoul.longitude);
      alert(this.longitude);
    },
  },
  computed: {
    iconCheck() {
      return this.weather.current_weather.weathercode;
    },
    ...mapState(moveWeather, ["getLatitude", "getLongitude", "getTimeZone"]),
  },
};
</script>

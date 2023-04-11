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
    <v-card-text>
      {{ this.searchData }}
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
      longitude: null,
      timezone: null,
      searchData: null,
      selectedLocation: null,
      postApiUrl: null,
      weatherIcon: [
        { weather: "sunny", icon: "mdi-weather-sunny" },
        { weather: "rainy", icon: "mdi-weather-rainy" },
        { weather: "cloudy", icon: "mdi-weather-cloudy" },
      ],
      weatherLocationItem: ["Seoul", "Denver", "Chicago", "NewYork"],
      weatherLocation: {
        seoul: {
          latitude: "52.52",
          longitude: "13.419998",
          timezone: "Asia/Tokyo",
        },
        denver: {
          latitude: "39.74",
          longitude: "-104.98",
          timezone: "America/Denver",
        },
        chicago: {
          latitude: "41.85",
          longitude: "-87.65",
          timezone: "America/Chicago",
        },
        newYork: {
          latitude: "40.71",
          longitude: "-74.01",
          timezone: "America/New_York",
        },
      },
    };
  },
  created() {
    this.getWeatherData();
    this.setLocation();
  },
  methods: {
    getWeatherData() {
      this.axios.get(this.exApiUrl).then((result) => {
        this.weather = result.data;
      });
    },
    setLocation() {
      const weatherLoca = this.weatherLocation;
      if (this.getLocation == "Seoul") {
        this.latitude = weatherLoca.seoul.latitude;
        this.longitude = weatherLoca.seoul.longitude;
        this.timezone = weatherLoca.seoul.timezone;
      } else if (this.getLocation == "Denver") {
        this.latitude = weatherLoca.denver.latitude;
        this.longitude = weatherLoca.denver.longitude;
        this.timezone = weatherLoca.denver.timezone;
      } else if (this.getLocation == "Chicago") {
        this.latitude = weatherLoca.chicago.latitude;
        this.longitude = weatherLoca.chicago.longitude;
        this.timezone = weatherLoca.chicago.timezone;
      } else if (this.getLocation == "NewYork") {
        this.latitude = weatherLoca.newYork.latitude;
        this.longitude = weatherLoca.newYork.longitude;
        this.timezone = weatherLoca.newYork.timezone;
      }
      this.getSearchWeatherData();
    },
    setLocationInfo(loca) {
      let location = loca;
      this.latitude = location.latitude;
      this.longitude = location.longitude;
      this.timezone = location.timezone;
    },
    getSearchWeatherData() {
      this.axios
        .get(
          `
            https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current_weather=true&timezone=${this.timezone}
          `
        )
        .then((result) => {
          this.searchData = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    iconCheck() {
      return this.weather.current_weather.weathercode;
    },
    ...mapState(moveWeather, ["getLocation"]),
  },
};
</script>

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
  <v-container>
    <v-combobox
      label="Search Location"
      :items="weatherLocationItem"
      persistent-hint
      v-model="selectLocation"
    >
    </v-combobox>
  </v-container>
  <v-btn
    class="mx-auto px-auto"
    color="blue"
    width="400px"
    @click="getLocation"
  >
    검색하기
  </v-btn>
  <v-btn @click="debug"> 디버깅 </v-btn>
</template>

<script>
import { Result } from "postcss";
const apiUrl = `https://api.open-meteo.com/v1/forecast`;
export default {
  data: () => {
    return {
      exApiUrl:
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&timezone=Asia%2FTokyo",
      weather: null,
      latitude: 1,
      longitude: 2,
      timezone: null,
      location: null,
      abc: null,
      weatherIcon: [
        { weather: "sunny", icon: "mdi-weather-sunny" },
        { weather: "rainy", icon: "mdi-weather-rainy" },
        { weather: "cloudy", icon: "mdi-weather-cloudy" },
      ],
      selectLocation: null,
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
    getLocation() {
      if (this.selectLocation != "") {
        if (this.selectLocation == "Seoul") {
            loca = seoul
          setLocationInfo(loca)
        } else if (this.selectLocation == "LosAngeles") {
            loca = losAngeles
          setLocationInfo(loca)
        } else if (this.selectLocation == "Chicago") {
            loca = chicago
          setLocationInfo(loca)
        } else if (this.selectLocation == "NewYork") {
            loca = NewYork
          setLocationInfo(loca)
        }
      }
    },
    setLocationInfo(loca) {
      loca = loca;
      this.latitude = this.weatherLocation.loca.latitude;
      this.longitude = this.weatherLocation.loca.longitude;
      this.timezone = this.weatherLocation.loca.timezone;
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
      console.log(this.longitude);
      console.log(this.weatherLocation.seoul.longitude);
    },
  },
  computed: {
    iconCheck() {
      return this.weather.current_weather.weathercode;
    },
  },
};
</script>

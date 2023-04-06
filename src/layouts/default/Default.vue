<template>
  <v-app>
    <default-bar @nav-onclose="drawer = !drawer" />
    <default-view />
    <v-navigation-drawer v-model="drawer" location="left" permanent>
      <v-list nav density="compact">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          @click="$router.push(item.link)"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";

export default {
  components: { DefaultBar, DefaultView },
  created: () => {},
  data: () => ({
    drawer: true,
    group: null,
    items: [
      {
        title: "Home",
        icon: "mdi-home-circle",
        link: "/",
      },
      {
        title: "서울날씨 보기",
        icon: "mdi-weather-hail",
        link: "/weather",
      },
      {
        title: "로그인",
        icon: "mdi-login",
        link: "/login",
      },
    ],
  }),
};
</script>

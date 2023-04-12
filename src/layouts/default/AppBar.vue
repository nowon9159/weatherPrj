<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click.stop="$emit('nav-onclose')"></v-app-bar-nav-icon>
    <v-app-bar-title>
      <v-icon icon="mdi-weather-fog" />
      날씨 {{ getId }}
      {{ getPw }}
    </v-app-bar-title>
  </v-app-bar>
</template>

<script>
import login from '@/mixins/login';

export default {

  mixins: [login]

}
</script>

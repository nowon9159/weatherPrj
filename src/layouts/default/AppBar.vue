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
import { useUserStore } from '@/stores/User';
import { mapState } from 'pinia';

export default {

  computed: {
    ...mapState(useUserStore, ['getId','getPw'])
  }

}
</script>

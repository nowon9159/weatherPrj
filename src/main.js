/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Composables
import { createApp } from 'vue'
import App from './App.vue'

// Plugins
import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia'

// 3rd-party
import axios from 'axios'
import VueAxios from 'vue-axios'
import routes from './router';


const app = createApp(App)
const pinia = createPinia()

app.use(VueAxios, axios)
app.use(routes);
app.use(pinia)

registerPlugins(app)

app.mount('#app')

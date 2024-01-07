import { createApp } from 'vue'

import plugins from "./plugins"

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'

const app = createApp(App)

plugins.install(app);

app.mount('#app')

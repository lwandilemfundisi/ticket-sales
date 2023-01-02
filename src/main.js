import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router'
import axios from 'axios'
import VueLogger from "vuejs-logger";

import store from './store'

Vue.config.productionTip = false
const isProduction = process.env.NODE_ENV === 'production';

Vue.eventCatalog = Vue.prototype.$http = axios.create({
  baseURL: 'https://localhost:44338'
})

Vue.shoppingBasket = Vue.prototype.$http = axios.create({
  baseURL: 'https://localhost:44316'
})

Vue.order = Vue.prototype.$http = axios.create({
  baseURL: 'https://localhost:44366'
})

Vue.use(VueLogger, {
    isEnabled: true,
    logLevel: isProduction ? 'error' : 'debug',
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: '|',
    showConsoleColors: true
  });

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router'
import axios from 'axios'

import store from './store'

Vue.config.productionTip = false

Vue.eventCatalog = Vue.prototype.$http = axios.create({
  baseURL: 'https://localhost:44338'
})

Vue.shoppingBasket = Vue.prototype.$http = axios.create({
  baseURL: 'https://localhost:44316'
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import basket from './modules/basket'
import eventDetail from './modules/eventDetail'
import eventCatalog from './modules/eventCatalog'
import basketLines from './modules/basketLines'
import checkout from './modules/checkout'
import order from './modules/orderDetails'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        eventCatalog,
        eventDetail,
        basketLines,
        basket,
        checkout,
        order,
        user
    },
    plugins: [createPersistedState({
        paths: ['basket']
    })]
})
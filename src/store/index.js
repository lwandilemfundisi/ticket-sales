import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import basket from './modules/basket'
import eventDetail from './modules/eventDetail'
import eventCatalog from './modules/eventCatalog'
import basketLines from './modules/basketLines'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        eventCatalog,
        eventDetail,
        basketLines,
        basket
    },
    plugins: [createPersistedState({
        paths: ['basket']
    })]
})
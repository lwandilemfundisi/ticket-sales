import Vue from 'vue'
import Vuex from 'vuex'

import eventCatalog from './modules/eventCatalog'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        eventCatalog
    }
})
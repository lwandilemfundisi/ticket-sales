import Vue from 'vue'
import Vuex from 'vuex'

import eventDetail from './modules/eventDetail'
import eventCatalog from './modules/eventCatalog'
import eventTicketBasket from './modules/eventTicketBasket'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        eventCatalog,
        eventDetail,
        eventTicketBasket
    }
})
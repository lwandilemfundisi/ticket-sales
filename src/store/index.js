import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import eventDetail from './modules/eventDetail'
import eventCatalog from './modules/eventCatalog'
import eventTicketBasket from './modules/eventTicketBasket'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        basket: null
    },
    actions: {
        createBasket({ commit }, payload) {
            Vue.shoppingBasket.post('/shoppingBasket/createBasket', payload)
                .then((resp) => {
                    if (resp.data) {
                        commit('setBasket', resp.data)
                    } else {
                        console.log('something went wrong creating basket')
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        getBasket({ commit, dispatch }, payload) {
            Vue.shoppingBasket.get('/shoppingBasket/getBasket', { params: payload })
                .then((resp) => {
                    if (resp.data) {
                        commit('setBasket', resp.data)
                    } else {
                        dispatch('createBasket', { userId: 'DummyUser' })
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    mutations: {
        setBasket(state, payload) {
            state.basket = payload
        }
    },
    getters: {
        getBasket: state => state.basket
    },
    modules: {
        eventCatalog,
        eventDetail,
        eventTicketBasket
    },
    plugins: [createPersistedState()]
})
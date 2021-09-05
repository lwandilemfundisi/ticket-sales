import Vue from "vue";
import router from '../../router'

const state = {
    event: null,
    loading: false,
    basket: null
}

const getters = {
    getEvent: state => state.event,
    isLoading: state => state.loading,
    getBasket: state => state.basket
}

const actions = {
    getEvent({ commit, state }, payload) {
        state.loading = true;
        Vue.eventCatalog.get('/event/getEvent/' + payload.eventId)
            .then((resp) => {
                payload.event = resp.data
                commit('setEventData', payload)
                state.loading = false;
            })
    },

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
    },

    addBasketLine({ commit }, payload) {
        Vue.shoppingBasket.post('/shoppingBasketLines/addBasketLine', payload)
            .then(() => {
                console.log("/eventTicketBasket/" + payload.basketId)
                router.push({ path: "/eventTicketBasket/" + payload.basketId})
                console.log(commit)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

const mutations = {
    setEventData(state, payload) {
        state.event = payload.event
    },

    setBasket(state, payload) {
        state.basket = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
import Vue from "vue";
import router from '../../router'

const state = {
    event: null,
    loading: false
}

const getters = {
    getEvent: state => state.event,
    isLoading: state => state.loading    
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
            .catch((err) => {
                console.log(err)
                state.loading = false;
            })
    },

    addBasketLine({ commit }, payload) {
        Vue.shoppingBasket.post('/shoppingBasketLines/addBasketLine', payload)
            .then(() => {
                router.push({ path: "/basketLines/" + payload.basketId})
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
    }    
}

export default {
    state,
    getters,
    actions,
    mutations
}
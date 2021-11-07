import Vue from "vue";
import router from '../../router'

const state = {
    busyCheckingOut: false
}

const actions = {

    async checkout({ commit, dispatch }, payload) {
        commit('setCheckoutStatus', true)
        Vue.shoppingBasket
            .post("/shoppingBasket/checkout", payload)
            .then(() => {
                commit('setCheckoutStatus', false)
                dispatch('clearBasket')
                router.push({ path: "/checkoutComplete" })
            })
            .catch((err) => {
                commit('setCheckoutStatus', false)
                if (err.response) {
                    Vue.$log.error(err.response.data);
                } else {
                    Vue.$log.error(err);
                }
            });
    }
}

const mutations = {
    setCheckoutStatus(state, payload) {
        state.busyCheckingOut = payload
    }
}

const getters = {
    isBusyCheckingOut: state => state.busyCheckingOut
}

export default {
    state,
    getters,
    actions,
    mutations
}


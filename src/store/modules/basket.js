import Vue from "vue";

const state = {
    basket: null
}

const actions = {
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
}

const mutations = {
    setBasket(state, payload) {
        state.basket = payload
    }
}

const getters = {
    getBasket: state => state.basket
}

export default {
    state,
    getters,
    actions,
    mutations
}
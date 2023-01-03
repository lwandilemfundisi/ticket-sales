import Vue from "vue";

const state = {
    basket: null
}

const actions = {
    clearBasket({commit}){
        commit('setBasket', null)
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
                if(err.response){
                    Vue.$log.error(err.response.data)
                }else{
                    Vue.$log.error(err)
                }
            })
    },

    getBasket({ commit, dispatch, getters }, payload) {
        Vue.shoppingBasket.get('/shoppingBasket/getBasket', { params: payload })
            .then((resp) => {
                if (resp.data) {
                    commit('setBasket', resp.data)
                } else {
                    dispatch('createBasket', { userId: getters.getUserId })
                }
            })
            .catch((err) => {
                if(err.response){
                    Vue.$log.error(err.response.data)
                }else{
                    Vue.$log.error(err)
                }
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
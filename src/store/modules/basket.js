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
                if(err.response){
                    Vue.$log.error(err.response.data)
                }else{
                    Vue.$log.error(err)
                }
            })
    },

    getBasket({ commit, dispatch }, payload) {
        Vue.shoppingBasket.get('/shoppingBasket/getBasket', { params: payload })
            .then((resp) => {
                if (resp.data) {
                    commit('setBasket', resp.data)
                } else {
                    dispatch('createBasket', { userId: '05c209ba-65fc-4397-9c16-6345ed436ada' })
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
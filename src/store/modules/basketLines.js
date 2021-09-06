import Vue from "vue";

const state = {
    basketLines: [],
    LoadingBasketLines: false
}

const getters = {
    getBasketLines: state => state.basketLines,
    isLoadingBasketLines: state => state.LoadingBasketLines
}

const actions = {
    async getBasketLines({ commit, state }, payload) {
        state.LoadingBasketLines = true
        Vue.shoppingBasket.get('/shoppingBasketLines/getBasketLines', { params: payload })
            .then((resp) => {
                state.LoadingBasketLines = false
                if (resp.data) {
                    commit('setBasketLines', resp.data)
                } else {
                    console.log('could not find basket lines')
                }
            })
            .catch((err) => {
                state.LoadingBasketLines = false
                if(err.response){
                    Vue.$log.error(err.response.data)
                }else{
                    Vue.$log.error(err)
                }
            })
    }
}

const mutations = {
    setBasketLines(state, payload) {
        state.basketLines = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
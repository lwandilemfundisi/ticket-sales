import Vue from "vue";

const state = {
    orders: [],
    LoadingOrders: false
}

const getters = {
    getOrders: state => state.orders,
    isLoadingOrders: state => state.LoadingOrders
}

const actions = {
    async getOrders({ commit, state }, payload) {
        state.LoadingOrders = true
        Vue.order.get('/Order/getOrders/' + payload.userId)
            .then((resp) => {
                state.LoadingOrders = false
                if (resp.data) {
                    commit('setOrders', resp.data)
                } else {
                    console.log('could not load orders')
                }
            })
            .catch((err) => {
                state.LoadingOrders = false
                if(err.response){
                    Vue.$log.error(err.response.data)
                }else{
                    Vue.$log.error(err)
                }
            })
    }
}

const mutations = {
    setOrders(state, payload) {
        state.orders = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
import Vue from "vue";

const state = {
    ticketLines: [],
    LoadingTicketLines: false
}

const getters = {
    getTicketLines: state => state.ticketLines,
    isLoadingTicketLines: state => state.LoadingTicketLines
}

const actions = {
    async getTicketLines({ commit, state }, payload) {
        state.LoadingTicketLines = true
        Vue.shoppingBasket.get('/shoppingBasketLines/getBasketLines', { params: payload })
            .then((resp) => {
                state.LoadingTicketLines = false
                if (resp.data) {
                    commit('setTicketLines', resp.data)
                } else {
                    console.log('could not find busket lines')
                }
            })
            .catch((err) => {
                state.LoadingTicketLines = false
                console.log(err)
            })
    }
}

const mutations = {
    setTicketLines(state, payload) {
        state.ticketLines = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
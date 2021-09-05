import Vue from "vue";

const state = {
    ticketLines: []
}

const getters = {
    getTicketLines: state => state.ticketLines
}

const actions = {
    async getTicketLines({ commit }, payload) {
        Vue.shoppingBasket.get('/shoppingBasketLines/getBasketLines', { params: payload })
            .then((resp) => {
                if (resp.data) {
                    commit('setTicketLines', resp.data)
                } else {
                    console.log('could not find busket lines')
                }
            })
            .catch((err) => {
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
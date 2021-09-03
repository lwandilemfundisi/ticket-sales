import Vue from "vue";

const state = {
    ticketLines: []
}

const getters = {
    getTicketLines: state => state.ticketLines
}

const actions = {
    async getTicketLines({ commit }, payload) {
        
    }
}

const mutations = {
    setTicketLines(state, payload) {
        state.ticketLines = payload.ticketLines
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
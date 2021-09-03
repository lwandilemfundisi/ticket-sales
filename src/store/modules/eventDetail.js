import Vue from "vue";

const state = {
    event: null
}

const getters = {
    getEvent: state => state.event
}

const actions = {
    async getEvent({ commit }, payload) {
        await Vue.axios.get('/event/getEvent/' + payload.id)
            .then((resp) => {
                payload.event = resp.data
                commit('setEventData', payload)
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
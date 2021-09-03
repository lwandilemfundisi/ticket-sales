import Vue from "vue";

const state = {
    events: []
}

const getters = {
    getEvents: state => state.events
}

const actions = {
    async getEvents({ commit }, payload) {
        await Vue.axios.get('/event/getEvents')
            .then((resp) => {
                let data = resp.data
                if (data && data.events.length > 0) {
                    payload.events = data.events
                    commit('setEventData', payload)
                }
                console.log(data)
            })
    }
}

const mutations = {
    setEventData(state, payload) {
        state.events = payload.events
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
import Vue from "vue";

const state = {
    event: null,
    loading: false
}

const getters = {
    getEvent: state => state.event,
    isLoading: state => state.loading
}

const actions = {
    async getEvent({ commit, state }, payload) {
        state.loading = true;
        await Vue.axios.get('/event/getEvent/' + payload.id)
            .then((resp) => {
                payload.event = resp.data
                commit('setEventData', payload)
                state.loading = false;
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
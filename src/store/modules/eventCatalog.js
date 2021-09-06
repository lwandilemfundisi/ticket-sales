import Vue from "vue";

const state = {
    events: []
}

const getters = {
    getEvents: state => state.events
}

const actions = {
    async getEvents({ commit }, payload) {
        await Vue.eventCatalog.get('/event/getEvents')
            .then((resp) => {
                let data = resp.data
                if (data && data.events.length > 0) {
                    payload.events = data.events
                    commit('setEventData', payload)
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
const state = {
    userId: null
}

const actions = {
    async getUserId({ commit }, payload) {
        commit('setUserId', '05c209ba-65fc-4397-9c16-6345ed436ada')
        console.log(payload)
    }
}

const mutations = {
    setUserId(state, payload) {
        state.userId = payload
    }
}

const getters = {
    getUserId: state => state.userId
}

export default {
    state,
    getters,
    actions,
    mutations
}
export default {
  async SIGNUP ({ commit }, payload) {
    const res = await this.$axios.$post(`${process.env.baseURL}/user/signup`, payload)
    return res
  },

  async LOGIN ({ commit, dispatch }, payload) {
    const res = await this.$axios.$post(`${process.env.baseURL}/user/login`, payload, {
      withCredentials: true
    })
    commit('SET_TOKEN', res)
    dispatch('USER')
    return res
  },

  async USER ({ commit }) {
    const res = await this.$axios.$get(`${process.env.baseURL}/user`, {
      withCredentials: true
    })
    commit('SET_USER', res)
    return res
  },

  async LOGOUT ({ commit }) {
    await this.$axios.$get(`${process.env.baseURL}/user/logout`, {
      withCredentials: true
    })
    commit('DELETE_USER')
  }
}

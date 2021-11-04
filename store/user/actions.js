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
    localStorage.setItem('user', JSON.stringify(res))
    return res
  },

  async LOGOUT ({ commit }) {
    const res = await this.$axios.$get(`${process.env.baseURL}/user/logout`, {
      withCredentials: true
    })
    commit('DELETE_USER')
    localStorage.removeItem('user')
    return res
  },

  async ADD_CART ({ commit }, payload) {
    const res = await this.$axios.$post(`${process.env.baseURL}/cart/add/${payload}`, '', {
      withCredentials: true
    })
    return res
  }
}

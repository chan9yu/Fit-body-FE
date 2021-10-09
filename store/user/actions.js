export default {
  async SIGNUP ({ commit }, payload) {
    const res = await this.$axios.$post(`${process.env.baseURL}/user/signup`, payload)
    return res
  },

  async LOGIN ({ commit }, payload) {
    const res = await this.$axios.$post(`${process.env.baseURL}/user/login`, payload, {
      withCredentials: true
    })
    commit('SET_TOKEN', res)
    return res
  }
}

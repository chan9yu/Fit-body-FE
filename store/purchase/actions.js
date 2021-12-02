const PURCHASES_URI = `${process.env.baseURL}/purchase`

export default {
  async GET_PURCHASE_INFO ({ commit }) {
    const res = await this.$axios.$get(PURCHASES_URI, { withCredentials: true })
    commit('SET_PURCHASE_INFO', res)
    return res
  },

  async ONE_PURCHASE ({ commit }, payload) {
    const res = await this.$axios.$post(`${PURCHASES_URI}/${payload}`, null, { withCredentials: true })
    commit('SET_PURCHASE_INFO', res)
    return res
  },

  async CART_ALL_PURCHASE ({ commit }) {
    const res = await this.$axios.$patch(PURCHASES_URI, null, { withCredentials: true })
    commit('SET_PURCHASE_INFO', res)
    return res
  }
}

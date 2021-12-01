const PRODUCT_URI = `${process.env.baseURL}/product`
const CART_URI = `${process.env.baseURL}/cart`

export default {
  async CART_IMTES_INFO ({ state, commit, dispatch }) {
    const res = await this.$axios.$get(CART_URI, { withCredentials: true })
    commit('SET_CART_INFO', res)
    if (state.cartInfo.length !== 0) {
      const ids = state.cartInfo.map(v => v.id)
      dispatch('GET_CART_ITEMS', ids)
    }
    return res
  },

  async GET_CART_ITEMS ({ commit }, payload) {
    const res = await this.$axios.$get(`${PRODUCT_URI}/${payload}/?type=cart`, { withCredentials: true })
    commit('SET_CART_ITEMS', res)
    return res
  },

  async ADD_CART_ITEMS ({ dispatch }, payload) {
    const res = await this.$axios.$patch(`${CART_URI}/${payload}`, '', { withCredentials: true })
    dispatch('CART_IMTES_INFO')
    return res
  },

  async DELETE_CART_IMTES ({ dispatch }, payload) {
    const res = await this.$axios.$delete(`${CART_URI}/${payload}`, { withCredentials: true })
    dispatch('CART_IMTES_INFO')
    return res
  }
}

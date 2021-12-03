const COMMENT_URI = `${process.env.baseURL}/comment`

export default {
  async FATCH_COMMENT_INFO ({ commit }, productId) {
    const res = await this.$axios.$get(`${COMMENT_URI}/${productId}`, { withCredentials: true })
    commit('SET_COMMENT_INFO', res)
    return res
  },

  async POST_COMMENT ({ commit }, payload) {
    const { productId, content } = payload
    const res = await this.$axios.$post(`${COMMENT_URI}/${productId}`, { content }, { withCredentials: true })
    commit('SET_COMMENT_INFO', res)
    return res
  }
}

const COMMENT_URI = `${process.env.baseURL}/comment`

export default {
  async FATCH_COMMENT_INFO ({ commit }, productId) {
    const res = await this.$axios.$get(`${COMMENT_URI}/${productId}`, { withCredentials: true })
    commit('CLEAR_COMMENTS_INFO')
    commit('SET_COMMENTS_INFO', res)
    return res
  },

  async POST_COMMENT ({ commit }, payload) {
    const { productId, content } = payload
    const res = await this.$axios.$post(`${COMMENT_URI}/${productId}`, { content }, { withCredentials: true })
    commit('CLEAR_COMMENTS_INFO')
    commit('SET_COMMENTS_INFO', res)
    return res
  },

  async REMOVE_COMMENT ({ dispatch }, commentId) {
    const res = await this.$axios.$delete(`${COMMENT_URI}/${commentId}`, { withCredentials: true })
    return res
  }
}

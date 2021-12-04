export default {
  SET_COMMENTS_INFO (state, payload) {
    state.comments = payload
  },
  CLEAR_COMMENTS_INFO (state) {
    state.comments = []
  }
}

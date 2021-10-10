export default {
  SET_USER: (state, user) => {
    state.user = user
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  DELETE_USER: (state) => {
    state.user = null
    state.token = null
  }
}

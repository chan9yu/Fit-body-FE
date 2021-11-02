export const state = () => ({
  alert: false,
  message: ''
})

export const mutations = {
  OPEN_ALERT (state) {
    state.alert = true
  },
  SET_MESSAGE (state, payload) {
    state.message = payload
  }
}

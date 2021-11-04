export const state = () => ({
  alert: false,
  message: ''
})

export const mutations = {
  OPEN_ALERT: (state) => {
    state.alert = true
  },
  COLSE_ALERT: (state) => {
    state.alert = false
  },
  SET_MESSAGE: (state, payload) => {
    state.message = payload
  }
}

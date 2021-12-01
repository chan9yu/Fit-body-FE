export const state = () => ({
  alert: false,
  message: '',
  alertToggle: false
})

export const mutations = {
  OPEN_ALERT: (state) => {
    state.alert = true
  },
  COLSE_ALERT: (state) => {
    state.alert = false
    state.alertToggle = !state.alertToggle
  },
  SET_MESSAGE: (state, payload) => {
    state.message = payload
  }
}

// 로그인 상태 유지
export const actions = {
  nuxtServerInit ({ dispatch }) {
    return dispatch('user/USER')
  }
}

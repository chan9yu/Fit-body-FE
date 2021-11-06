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

export const actions = {
  // 만약 로그인이 되어있다면 스토어에 유저 데이터를 미리 설정
  async nuxtServerInit ({ getters, commit, dispatch }, { req }) {
    if (req.headers.cookie) {
      const auth = req.headers.cookie.split(';')[0].replace(/^auth=/, '')
      commit('user/SET_TOKEN', auth)
    }
    if (getters['user/isLogin']) {
      await dispatch('user/USER')
    }
  }
}

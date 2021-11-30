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
  // async nuxtServerInit ({ commit, dispatch }, { req }) {
  //   if (req.headers.cookie.includes('connect.sid')) {
  //     const res = await this.$axios.$get(`${process.env.baseURL}/user`, {
  //       withCredentials: true
  //     })
  //     commit('user/SET_USER', res)
  //   }
  // }
  nuxtServerInit ({ commit, dispatch, state }, { req }) {
    return dispatch('user/USER')
  }
}

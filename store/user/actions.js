import { loginUser } from '@/api/auth'

export default {
  async LOGIN ({ commit }, payload) {
    const { data } = await loginUser(payload)
    console.log(data)
    commit('SET_USER', data)
    return data
  }
}

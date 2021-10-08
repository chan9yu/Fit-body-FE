import { loginUser } from '@/api/auth'

export default {
  async LOGIN ({ commit }, payload) {
    try {
      const { data } = await loginUser(payload)
      commit('SET_USER', data)
      return data
    } catch {
      alert('로그인이 실패하였습니다')
    }
  }
}

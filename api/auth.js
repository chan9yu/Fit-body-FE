import { instance } from './index'

function signupUser (data) {
  return instance.post('user/signup', data)
}

function loginUser (data) {
  return instance.post('user/login', data, { withCredentials: true })
}

export { signupUser, loginUser }

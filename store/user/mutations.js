export default {
  SET_USER: (state, user) => {
    state.user = user
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  DELETE_USER: (state) => {
    state.user = {}
    state.token = null
  },
  SET_CART_ID: (state, cartId) => {
    state.cartId.push(cartId)
  },
  SET_CART_ITEM: (state, cartItem) => {
    state.cartItem = cartItem
  }
}

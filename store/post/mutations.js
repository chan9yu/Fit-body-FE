export default {
  SET_PRODUCT_INFO: (state, payload) => {
    state.productInfo = payload
  },
  SET_PRODUCT: (state, payload) => {
    state.product = payload
  },
  SET_WITH_PRODUCTS: (state, payload) => {
    state.withProducts = payload
  },
  SET_SKIP: (state, payload) => {
    state.skip = payload
  }
}

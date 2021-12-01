const PRODUCT_URI = `${process.env.baseURL}/product`
const CONFIG = { header: { 'content-type': 'multipart/form-data' } }

export default {
  async IMAGE_UPLOAD ({ commit }, payload) {
    const res = await this.$axios.$post(`${PRODUCT_URI}/images`, payload, CONFIG)
    return res
  },

  async PRODUCT_UPLOAD ({ commit }, payload) {
    const res = await this.$axios.$post(`${PRODUCT_URI}`, payload, { withCredentials: true })
    return res
  },

  async PRODUCTS_INFO ({ state, commit }, payload) {
    const res = await this.$axios.$post(`${PRODUCT_URI}/products`, payload)
    // loadMore 가 true 일 때, 분기 처리 (상품 더 보기)
    if (payload.loadMore) {
      const data = {
        postSize: res.postSize,
        products: [...state.productInfo.products, ...res.products]
      }
      commit('SET_PRODUCT_INFO', data)
      return res
    }
    commit('SET_PRODUCT_INFO', res)
    return res
  },

  async WITH_PRODUCT ({ commit }) {
    const res = await this.$axios.$get(`${PRODUCT_URI}/with`)
    commit('SET_WITH_PRODUCTS', res)
    return res
  }
}

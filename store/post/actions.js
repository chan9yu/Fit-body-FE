export default {
  async IMAGE_UPLOAD ({ commit }, payload) {
    const config = { header: { 'content-type': 'multipart/form-data' } }
    const res = await this.$axios.$post(`${process.env.baseURL}/product/images`, payload, config)
    return res
  },

  async PRODUCT_UPLOAD ({ commit }, payload) {
    const res = await this.$axios.$post(`${process.env.baseURL}/product`, payload, {
      withCredentials: true
    })
    return res
  },

  async PRODUCTS_INFO ({ state, commit }, payload) {
    const res = await this.$axios.$post(`${process.env.baseURL}/product/products`, payload)
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
    const res = await this.$axios.$get(`${process.env.baseURL}/product/with`)
    commit('SET_WITH_PRODUCTS', res)
    return res
  }
}

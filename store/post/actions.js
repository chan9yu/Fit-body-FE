export default {
  async IMAGE_UPLOAD ({ commit }, payload) {
    const config = { header: { 'content-type': 'multipart/form-data' } }
    const res = await this.$axios.$post(`${process.env.baseURL}/product/images`, payload, config)
    return res
  }
}

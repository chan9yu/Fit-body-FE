<template>
  <v-container class="mt-5">
    <v-row>
      <v-col cols="12" lg="8">
        <ProductImage :image="product[0].images" />
      </v-col>
      <v-col cols="12" lg="4" class="product-container">
        <ProductDescription :product="product" />
      </v-col>
    </v-row>
    <div class="comment-box">
      <CommentList :product-id="productId" />
    </div>
    <WithItems :categorys="product[0].categorys" />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import ProductImage from '@/components/product/ProductImage'
import ProductDescription from '@/components/product/ProductDescription'
import CommentList from '@/components/product/CommentList'
import WithItems from '@/components/product/WithItems'

export default {
  components: {
    ProductImage,
    ProductDescription,
    CommentList,
    WithItems
  },

  async fetch ({ store, params }) {
    try {
      const { id } = params
      const { data } = await axios.get(`${process.env.baseURL}/product/${id}`)
      store.commit('post/SET_PRODUCT', data)
      // 이전 데이터 초기화
      store.commit('post/SET_PRODUCT_INFO', {})
      store.commit('post/SET_SKIP', 0)
    } catch (error) {
      this.$store.commit('SET_MESSAGE', error.response.data.message)
      this.$store.dispatch('AUTO_ALERT')
    }
  },

  head () {
    return {
      title: this.product[0].title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product[0].description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.product[0].title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.product[0].description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.baseURL}/${this.product[0].images[0]}`
        }
      ]
    }
  },

  computed: {
    ...mapState('post', ['product']),
    productId () {
      return this.$route.params.id
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-box {
  margin: 100px 0;
}
</style>

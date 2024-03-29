<template>
  <v-container class="product-item-box">
    <v-row>
      <v-col v-for="product in productInfo.products" :key="product._id" cols="6" lg="3" md="4">
        <v-hover>
          <template #default="{ hover }">
            <v-card>
              <v-img
                :src="`${imageUri}/${product.images[0]}`"
                :aspect-ratio="8/8"
                width="auto"
              />
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  z-index="4"
                  color="#2c3e50"
                >
                  <div class="text-center">
                    <div class="text-h6 pa-2">
                      [{{ product.subCategorys }}]{{ productTitle(product.title) }}
                    </div>
                    <div class="subtitle-1 font-weight-thin pa-2">
                      {{ price(product.price) }}원
                    </div>
                    <v-btn @click="toProductDetail(product._id)">
                      상품보러가기
                    </v-btn>
                  </div>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-btn
        v-if="productInfo.postSize >= limit"
        text
        class="text-h4 font-weight-regular my-16"
        @click="loadMoreProductsInfo"
      >
        - LOAD MORE -
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    categorys: {
      type: String,
      default: ''
    },
    subCategorys: {
      type: String,
      default: ''
    }
  },

  computed: {
    ...mapState('post', ['productInfo', 'skip', 'limit']),
    imageUri () {
      return process.env.baseURL
    }
  },

  created () {
    this.getProductsInfo()
  },

  methods: {
    async getProductsInfo () {
      this.$store.commit('post/SET_SKIP', 0)
      const body = {
        skip: this.skip,
        limit: this.limit,
        categorys: this.categorys,
        subCategorys: this.subCategorys
      }
      await this.$store.dispatch('post/PRODUCTS_INFO', body)
    },
    async loadMoreProductsInfo () {
      try {
        this.$store.commit('post/SET_SKIP', this.skip + this.limit)
        const body = {
          skip: this.skip,
          limit: this.limit,
          categorys: this.categorys,
          subCategorys: this.subCategorys,
          loadMore: true // 상품 더보기 구분!
        }
        await this.$store.dispatch('post/PRODUCTS_INFO', body)
      } catch (error) {
        this.$store.commit('SET_MESSAGE', error.response.data.message)
        this.$store.dispatch('AUTO_ALERT')
      }
    },
    productTitle (title) {
      const len = 20
      const lastTxt = '...'
      const newTitle = title.length > len
        ? title = title.substr(0, len) + lastTxt
        : title
      return newTitle
    },
    toProductDetail (id) {
      this.$router.push(`/product/${id}`)
    },
    price (price) {
      return price.toLocaleString()
    }
  }
}
</script>

<style lang="scss" scoped>
.product-item-box {
  margin-top: 64px;
  @media screen and (max-width: 768px) {
    margin-top: 24px;
  }
}
</style>

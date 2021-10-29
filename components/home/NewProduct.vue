<template>
  <v-container class="my-16">
    <p class="text-h3 font-weight-regular text-center my-16">
      All Products
    </p>
    <v-row>
      <v-col v-for="product in productInfo.products" :key="product._id" cols="12" lg="3" md="4">
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
                  color="#111"
                >
                  <div class="text-center">
                    <div class="text-h6 pa-2">
                      [{{ product.subCategorys }}]{{ productTitle(product.title) }}
                    </div>
                    <div class="subtitle-1 font-weight-thin pa-2">
                      {{ product.price }}원
                    </div>
                    <v-btn nuxt to="/product/1">
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
  data () {
    return {
      overlay: false,
      zIndex: 0
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
      try {
        const body = {
          skip: this.skip,
          limit: this.limit
        }
        await this.$store.dispatch('post/PRODUCT_INFO', body)
      } catch (error) {
        console.error(error)
      }
    },
    async loadMoreProductsInfo () {
      try {
        this.$store.commit('post/SET_SKIP', this.skip + this.limit)
        const body = {
          skip: this.skip,
          limit: this.limit,
          loadMore: true // 상품 더보기 구분!
        }
        await this.$store.dispatch('post/PRODUCT_INFO', body)
      } catch (error) {
        console.error(error)
      }
    },
    // 글자 수 20자 넘길 시 ... 처리
    productTitle (title) {
      const len = 20
      const lastTxt = '...'
      const newTitle = title.length > len
        ? title = title.substr(0, len) + lastTxt
        : title
      return newTitle
    }
  }
}
</script>

<template>
  <v-container class="products-container">
    <p class="font-weight-regular text-center">
      All Products
    </p>
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
                  color="#111"
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
        await this.$store.dispatch('post/PRODUCTS_INFO', body)
      } catch {
        this.$store.commit('SET_MESSAGE', '정보를 불러오는데 실패하였습니다!')
        this.$store.dispatch('AUTO_ALERT')
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
        await this.$store.dispatch('post/PRODUCTS_INFO', body)
      } catch {
        this.$store.commit('SET_MESSAGE', '정보를 불러오는데 실패하였습니다!')
        this.$store.dispatch('AUTO_ALERT')
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
    },
    toProductDetail (id) {
      this.$router.push(`product/${id}`)
    },
    // 가격 쉼표 처리
    price (price) {
      return price.toLocaleString()
    }
  }
}
</script>

<style lang="scss" scoped>
.products-container {
  margin-top: 64px;
  @media screen and (max-width: 600px) {
    margin-top: 0px;
  }
  > p {
    margin: 48px 0;
    font-size: 48px;
    @media screen and (max-width: 768px) {
      margin: 24px 0;
      font-size: 30px;
    }
  }
}

</style>

<template>
  <v-container class="my-12">
    <div class="text-h4 my-5">
      With Item
    </div>
    <v-row>
      <v-col
        v-for="product in withProducts.products"
        :key="product._id"
        cols="6"
        md="3"
        lg="3"
        xl="3"
      >
        <v-hover>
          <template #default="{ hover }">
            <v-card>
              <v-img
                :aspect-ratio="3/3"
                :src="`${imageUri}/${product.images[0]}`"
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
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    categorys: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapState('post', ['withProducts']),
    imageUri () {
      return process.env.baseURL
    }
  },

  created () {
    this.setWithItem()
  },

  methods: {
    async setWithItem () {
      try {
        await this.$store.dispatch('post/WITH_PRODUCT')
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
.withitem-box {
  display: flex;
  gap: 20px;
}
</style>

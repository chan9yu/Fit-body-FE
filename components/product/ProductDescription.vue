<template>
  <v-container>
    <div class="product-content">
      <div class="mb-12">
        <div class="text-h6 text--secondary mb-12">
          {{ product[0].categorys }} > {{ product[0].subCategorys }}
        </div>
        <div class="text-h4 mb-4">
          {{ product[0].title }}
        </div>
        <div class="text-h8 mb-4">
          {{ product[0].description }}
        </div>
        <div class="text-h6 mb-2 text--secondary">
          Price
        </div>
        <div class="text-h4">
          {{ price }}원
        </div>
      </div>
      <v-divider />
      <div class="product-counting my-8">
        <div class="input-box">
          <span class="text-subtitle-2">1 EA</span>
        </div>
        <span class="text-h6">{{ price }}원</span>
      </div>
      <v-divider />
      <div class="prouduct-price my-8">
        <span class="text-h6 text--secondary">Price</span>
        <span class="text-h6">{{ price }}원</span>
      </div>
      <v-divider />
      <div class="prouduct-price my-8">
        <span class="text-h6 text--secondary">Total</span>
        <span class="text-h6">{{ price }}원</span>
      </div>
      <div class="product-btns">
        <v-btn @click="buyProduct">
          구매하기
        </v-btn>
        <v-btn @click="addCart">
          장바구니
        </v-btn>
        {{ alert }}
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    product: {
      type: Array,
      required: true
    }
  },

  // data() {
  //   return {
  //     key: value
  //   }
  // },

  computed: {
    ...mapGetters('user', ['isLogin']),
    price () {
      return this.product[0].price.toLocaleString()
    },
    alert () {
      return this.$store.state.alert
    }
  },

  watch: {
    alert () {
      this.$router.go()
    }
  },

  methods: {
    buyProduct () {
      if (this.isLogin) {
        this.$store.commit('SET_MESSAGE', '구매 구현 준비중 입니다!')
        this.$store.commit('OPEN_ALERT')
      } else {
        this.$store.commit('SET_MESSAGE', '로그인이 필요한 서비스 입니다!')
        this.$store.commit('OPEN_ALERT')
      }
    },
    async addCart () {
      if (this.isLogin) {
        const id = this.product[0]._id
        await this.$store.dispatch('user/ADD_CART', id)
        this.$store.commit('SET_MESSAGE', '장바구니에 상품을 담았습니다!')
        this.$store.commit('OPEN_ALERT')
      } else {
        this.$store.commit('SET_MESSAGE', '로그인이 필요한 서비스 입니다!')
        this.$store.commit('OPEN_ALERT')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.product-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .product-content {
    display: flex;
    flex-direction: column;
    .product-counting {
      display: flex;
      gap: 10px;
      .input-box {
        display: flex;
        align-items: center;
        gap: 10px;
        > input {
          width: 30px;
        }
      }
    }
    .prouduct-price {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .product-btns {
      display: flex;
      gap: 10px;
      > * {
        width: 50%;
      }
    }
  }
}
</style>

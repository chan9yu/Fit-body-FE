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
        <v-btn @click="toBuyModalShow">
          구매하기
        </v-btn>
        <v-btn @click="addCart">
          장바구니
        </v-btn>
      </div>
    </div>
    <transition name="fade">
      <Modal v-if="showModal" :item-id="product[0]._id" mode="single" @closeModal="closeModal" />
    </transition>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Modal from '@/components/common/Modal'

export default {
  components: {
    Modal
  },

  props: {
    product: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      showModal: false
    }
  },

  computed: {
    ...mapState(['alertToggle']),
    ...mapState('user', ['user']),
    price () {
      return this.product[0].price.toLocaleString()
    }
  },

  methods: {
    toBuyModalShow () {
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
    },
    async addCart () {
      try {
        await this.$store.dispatch('cart/ADD_CART_ITEMS', this.product[0]._id)
        this.$store.commit('SET_MESSAGE', '상품을 장바구니에 담았습니다.')
        this.$store.dispatch('AUTO_ALERT')
      } catch (error) {
        this.$store.commit('SET_MESSAGE', error.response.data.message)
        this.$store.dispatch('AUTO_ALERT')
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

:is(.fade-enter-active, .fade-leave-active) {
  transition: opacity .5s;
}
:is(.fade-enter, .fade-leave-to) {
  opacity: 0;
}
</style>

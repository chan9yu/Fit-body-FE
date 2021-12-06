<template>
  <client-only>
    <div class="table-footer">
      <div class="total-text">
        <span>최종 결제 금액</span> {{ totalPrice() }} 원
      </div>
      <v-btn
        large
        color="primary"
        dark
        @click="toBuyModalShow"
      >
        모두 구매하기
      </v-btn>
      <transition name="fade">
        <Modal v-if="showModal" mode="array" @closeModal="closeModal" />
      </transition>
    </div>
  </client-only>
</template>

<script>
import { mapState } from 'vuex'
import Modal from '@/components/common/Modal'

export default {
  components: {
    Modal
  },

  data () {
    return {
      showModal: false
    }
  },

  computed: {
    ...mapState('cart', ['cartInfo', 'cartItems'])
  },

  methods: {
    totalPrice () {
      const count = this.cartInfo.map(v => v.count)
      const price = this.cartItems.map(v => v.price)
      let res = 0
      for (let i = 0; i < count.length; i += 1) {
        res = (count[i] * price[i]) + res
      }
      return res.toLocaleString()
    },
    toBuyModalShow () {
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
    },
    async onClickPurchase () {
      try {
        await this.$store.dispatch('purchase/CART_ALL_PURCHASE')
        await this.$store.dispatch('cart/CART_IMTES_INFO')
        this.$store.commit('SET_MESSAGE', '구매를 완료했습니다.')
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
.table-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 50px 0;
  .total-text {
    display: flex;
    align-items: center;
    color: #333;
    font-size: 25px;
    gap: 10px;
    span {
      font-size: 20px;
      color: #888;
    }
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 5px;
    .total-text {
      font-size: 20px;
      span {
        font-size: 15px;
      }
    }
  }
}
</style>

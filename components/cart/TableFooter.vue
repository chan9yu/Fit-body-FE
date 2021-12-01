<template>
  <div class="table-footer">
    <div class="total-text">
      <span>최종 결제 금액</span> {{ totalPrice() }} 원
    </div>
    <v-btn
      large
      color="primary"
      dark
    >
      모두 구매하기
    </v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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
}
</style>

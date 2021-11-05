<template>
  <v-container>
    <p class="text-h6 font-weight-regular text-center my-8">
      {{ user.name }}님의 장바구니
    </p>
    <v-divider />
    <CartTable @updateCart="updateCart" />
  </v-container>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import CartTable from '@/components/user/CartTable'

export default {
  components: {
    CartTable
  },

  async fetch ({ store }) {
    try {
      const { cart } = store.state.user.user
      // 요청을 보내기 위해 유저정보 안에 카트 상품 아이디만 추출해서 사용
      Array.prototype.forEach.call(cart, (item) => {
        store.commit('user/SET_CART_ID', item.id)
      })
      const { cartId } = store.state.user
      const { data } = await axios.get(`${process.env.baseURL}/product/?id=${cartId}&type=array`)
      // quantity(수량) 데이터를 받아온 데이터에 포함 시켜서 저장
      Array.prototype.forEach.call(cart, (cartItem) => {
        data.forEach((productDetail, index) => {
          if (cartItem.id === productDetail._id) {
            data[index].quantity = cartItem.quantity
          }
        })
      })
      store.commit('user/SET_CART_ITEM', data)
    } catch {
      store.commit('SET_MESSAGE', '정보를 불러오는데 실패하였습니다!')
      store.commit('OPEN_ALERT')
    }
  },

  computed: {
    ...mapState('user', ['user'])
  },

  methods: {
    updateCart (data) {
      this.$store.commit('user/SET_CART_ITEM', data)
      this.$router.go()
    }
  }
}
</script>

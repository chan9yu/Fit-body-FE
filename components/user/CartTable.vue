<template>
  <v-simple-table v-if="isCartView">
    <template #default>
      <thead>
        <tr>
          <th v-for="theadItem in theadItems" :key="theadItem.id">
            {{ theadItem.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in cartItem"
          :key="item._id"
          class="cart-itmes"
        >
          <td>
            <v-img
              :src="`${imageUri}/${item.images[0]}`"
              :aspect-ratio="4/4"
              :width="100"
              class="my-3"
            />
          </td>
          <td>{{ item.title }}</td>
          <td>{{ price(item.price) }}원</td>
          <td>{{ item.quantity }} 개</td>
          <td>
            <v-btn
              depressed
              color="error"
              @click="removeCartItem(item._id)"
            >
              삭제하기
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <div v-else>
    상품을 장바구니에 담아주세요!
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      theadItems: [
        { id: 1, name: '이미지' },
        { id: 2, name: '상품정보' },
        { id: 3, name: '판매가' },
        { id: 4, name: '수량' },
        { id: 5, name: '선택' }
      ]
    }
  },

  computed: {
    ...mapState('user', ['cartItem']),
    imageUri () {
      return process.env.baseURL
    },
    isCartView () {
      return this.cartItem !== []
    }
  },

  methods: {
    async removeCartItem (id) {
      try {
        const { data } = await axios.get(`${process.env.baseURL}/cart/remove/?id=${id}`, { withCredentials: true })
        Array.prototype.forEach.call(data.cart, (item) => {
          this.$store.commit('user/SET_CART_ID', item.id)
        })
        const { cart } = this.$store.state.user.user
        Array.prototype.forEach.call(cart, (cartItem) => {
          data.productInfo.forEach((product, index) => {
            if (cartItem.id === product._id) {
              data.productInfo[index].quantity = cartItem.quantity
            }
          })
        })
        this.$emit('updateCart', data.productInfo)
      } catch (error) {
        console.error(error)
      }
    },
    price (price) {
      return price.toLocaleString()
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-itmes {
  td {
    vertical-align: middle
  }
}
</style>

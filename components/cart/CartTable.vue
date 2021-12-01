<template>
  <div v-if="isNotCartInfo">
    <v-simple-table>
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
            v-for="(cartItem, index) in cartItems"
            :key="cartItem._id"
            class="cart-itmes"
          >
            <td>
              <v-img
                :src="`${imageUri}/${cartItem.images[0]}`"
                alt="상품 이미지"
                :aspect-ratio="4/4"
                :width="100"
                class="mx-auto"
              />
            </td>
            <td>{{ cartItem.title }}</td>
            <td>{{ price(cartItem.price, index) }}원</td>
            <td>{{ count(index) }} 개</td>
            <td>
              <v-btn
                depressed
                color="error"
                @click="removeCartItem(cartItem._id)"
              >
                삭제하기
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <TableFooter />
  </div>
  <div v-else class="default-img">
    <p class="text-h5 font-weight-regular text-center my-16">
      장바구니가 비어있습니다!
    </p>
    <v-img
      :src="require(`@/assets/images/common/default_product.png`)"
      :aspect-ratio="4/4"
      :width="200"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TableFooter from '@/components/cart/TableFooter'

export default {
  components: {
    TableFooter
  },

  data () {
    return {
      theadItems: [
        { id: 1, name: '이미지' },
        { id: 2, name: '상품정보' },
        { id: 3, name: '가격' },
        { id: 4, name: '수량' },
        { id: 5, name: '선택' }
      ]
    }
  },

  computed: {
    ...mapState('cart', ['cartInfo', 'cartItems']),
    imageUri () {
      return process.env.baseURL
    },
    isNotCartInfo () {
      return this.cartInfo.length !== 0
    }
  },

  created () {
    this.fetchCartInfo()
  },

  methods: {
    async fetchCartInfo () {
      try {
        await this.$store.dispatch('cart/CART_IMTES_INFO')
      } catch (error) {
        console.error(error)
      }
    },
    async removeCartItem (id) {
      try {
        await this.$store.dispatch('cart/DELETE_CART_IMTES', id)
        this.$store.commit('SET_MESSAGE', '상품을 삭제했습니다!')
        this.$store.commit('OPEN_ALERT')
      } catch (error) {
        console.error(error)
      }
    },
    price (price, index) {
      return (this.cartInfo[index]?.count * price).toLocaleString()
    },
    count (index) {
      return this.cartInfo[index]?.count
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

.default-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: #888;
  }
}
</style>

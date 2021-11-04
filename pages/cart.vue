<template>
  <v-container>
    <div>장바구니페이지</div>
    <v-divider />
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
              >
                삭제하기
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
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

  async fetch ({ store }) {
    try {
      const cart = store.state.user.user.cart
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
      console.log(store.state.user)
      store.commit('SET_MESSAGE', '정보를 불러오는데 실패하였습니다!')
      store.commit('OPEN_ALERT')
    }
  },

  computed: {
    ...mapState('user', ['cartItem']),
    imageUri () {
      return process.env.baseURL
    }
  },

  methods: {
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

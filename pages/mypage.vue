<template>
  <v-container>
    <p class="text-h6 font-weight-regular text-center my-8">
      {{ user.name }}님의 구매목록
    </p>
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
              v-for="(item, index) in purchase"
              :key="index"
              class="cart-itmes"
            >
              <td>
                <v-img
                  :src="`${imageUri}/${item.images[0]}`"
                  alt="상품 이미지"
                  :aspect-ratio="4/4"
                  :width="100"
                  class="mx-auto"
                />
              </td>
              <td>{{ item.title }}</td>
              <td>{{ item.description }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div v-else class="default-img">
      <p class="text-h5 font-weight-regular text-center my-16">
        구매목록이 없습니다!
      </p>
      <v-img
        :src="require(`@/assets/images/common/default_product.png`)"
        :aspect-ratio="4/4"
        :width="200"
      />
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      theadItems: [
        { id: 1, name: '이미지' },
        { id: 2, name: '상품이름' },
        { id: 3, name: '상품정보' }
      ]
    }
  },

  async fetch ({ store }) {
    try {
      await store.dispatch('purchase/GET_PURCHASE_INFO')
    } catch (error) {
      this.$store.commit('SET_MESSAGE', error.response.data.message)
      this.$store.dispatch('AUTO_ALERT')
    }
  },

  head () {
    return {
      title: `${this.user.name}님의 구매내역`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.user.name}님의 구매내역`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.user.name}님의 구매내역`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.user.name}님의 구매내역`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: require('@/assets/images/carousel/main_2.png')
        }
      ]
    }
  },

  computed: {
    ...mapState('purchase', ['purchase']),
    ...mapState('user', ['user']),
    imageUri () {
      return process.env.baseURL
    },
    isNotCartInfo () {
      return this.purchase.length !== 0
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

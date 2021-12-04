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
import { mapState } from 'vuex'
import CartTable from '@/components/cart/CartTable'

export default {
  components: {
    CartTable
  },

  computed: {
    ...mapState(['alertToggle']),
    ...mapState('user', ['user'])
  },

  methods: {
    updateCart () {
      this.$store.commit('SET_MESSAGE', '상품을 삭제하였습니다!')
      this.$store.dispatch('AUTO_ALERT')
    }
  }
}
</script>

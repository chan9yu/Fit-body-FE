<template>
  <div class="text-center modal">
    <v-card
      class="mx-auto pa-6"
      max-width="500"
    >
      <div class="grey--text text-h6 mb-6 pa-4">
        상품을 구매하시겠습니까?
      </div>
      <v-btn
        class="ma-1"
        color="error"
        large
        @click="closeModal"
      >
        취소하기
      </v-btn>
      <v-btn
        class="ma-1"
        color="primary"
        large
        @click="buyProduct"
      >
        구매하기
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: true
    },
    itemId: {
      type: String,
      default: ''
    }
  },

  methods: {
    async buyProduct () {
      if (this.mode === 'single') {
        try {
          await this.$store.dispatch('purchase/ONE_PURCHASE', this.itemId)
          this.$store.commit('SET_MESSAGE', '구매를 완료했습니다.')
          this.$store.dispatch('AUTO_ALERT')
        } catch (error) {
          this.$store.commit('SET_MESSAGE', error.response.data.message)
          this.$store.dispatch('AUTO_ALERT')
        }
      } else if (this.mode === 'array') {
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
      this.closeModal()
    },
    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
</style>

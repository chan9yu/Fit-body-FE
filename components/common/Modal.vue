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
      >
        취소하기
      </v-btn>
      <v-btn
        class="ma-1"
        color="primary"
        large
      >
        구매하기
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {

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

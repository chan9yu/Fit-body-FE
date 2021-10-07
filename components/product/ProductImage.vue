<template>
  <v-container>
    <!-- 상품 이미지 슬라이드 -->
    <v-img
      :aspect-ratio="5/3"
      src="http://placeimg.com/1100/600/people"
    />
    <!-- 모든 상품 이미지 목록 (최대 4장) -->
    <div class="mt-5 images-box">
      <div v-for="index in 4" :key="index">
        <v-img
          :aspect-ratio="4/4"
          :width="260"
          src="http://placeimg.com/640/480/people"
        />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.images-box {
  display: flex;
  justify-content: space-between;
}
</style>

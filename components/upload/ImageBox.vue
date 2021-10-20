<template>
  <v-row class="mt-8">
    <v-col
      v-for="(image, index) in images"
      :key="index"
      cols="12"
      lg="4"
      align-self="center"
    >
      <v-card
        class="ma-1"
        @click="onClickImage(image)"
      >
        <v-img
          :src="`http://localhost:3000/${image}`"
          alt="이미지"
          :aspect-ratio="4/4"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => ([])
    }
  },

  methods: {
    onClickImage (image) {
      this.$emit('imageDelete', image)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <v-container>
    <v-img
      :src="`${imageUri}/${image[0]}`"
    />
  </v-container>
</template>

<script>
export default {
  props: {
    image: {
      type: Array,
      required: true
    }
  },

  computed: {
    imageUri () {
      return process.env.baseURL
    }
  }
}
</script>

<style lang="scss" scoped>
.images-box {
  display: flex;
  justify-content: space-between;
}
</style>

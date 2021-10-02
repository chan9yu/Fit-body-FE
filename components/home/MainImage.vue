<template>
  <v-carousel
    cycle
    :height="height"
    hide-delimiters
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(item, index) in items" :key="index">
      <v-img :src="item.src" contain />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { src: require('@/assets/images/carousel/main_1.png') },
        { src: require('@/assets/images/carousel/main_2.png') },
        { src: require('@/assets/images/carousel/main_3.png') }
      ]
    }
  },

  computed: {
    height () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 300
        case 'sm': return 400
        case 'md': return 500
        case 'lg': return 600
        default: return 700
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-responsive__content {
  height: 100px !important;
}
</style>

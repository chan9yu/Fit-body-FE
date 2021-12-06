<template>
  <v-container>
    <ProductMenu :title="title" :sub-menus="subMenus" />
    <ProductItems :categorys="'aerobic'" />
  </v-container>
</template>

<script>
import ProductMenu from '@/components/product/ProductMenu'
import ProductItems from '@/components/product/ProductItems'

export default {
  components: {
    ProductMenu,
    ProductItems
  },

  data () {
    return {
      title: '유산소기구',
      subMenus: [
        {
          name: '런닝머신',
          to: 'aerobic/1'
        },
        {
          name: '사이클',
          to: 'aerobic/2'
        },
        {
          name: '로잉머신',
          to: 'aerobic/3'
        },
        {
          name: '일립티컬',
          to: 'aerobic/4'
        },
        {
          name: '샌드백',
          to: 'aerobic/5'
        }
      ]
    }
  },

  head () {
    return {
      title: `Fitbody | ${this.title}`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Fitbody | ${this.title}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Fitbody | ${this.title}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: require('@/assets/images/carousel/main_2.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

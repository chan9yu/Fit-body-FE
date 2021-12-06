<template>
  <v-container>
    <ProductMenu :title="title" :sub-menus="subMenus" />
    <ProductItems :categorys="'assist'" />
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
      title: '어시스트',
      subMenus: [
        {
          name: '보조기구',
          to: 'assist/1'
        },
        {
          name: '스트랩',
          to: 'assist/2'
        },
        {
          name: '매트',
          to: 'assist/3'
        },
        {
          name: '튜빙밴드',
          to: 'assist/4'
        },
        {
          name: '케이블손잡이',
          to: 'assist/5'
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
          content: require('@/assets/images/carousel/main_1.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

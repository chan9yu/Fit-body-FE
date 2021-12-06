<template>
  <v-container>
    <ProductMenu :title="title" :sub-menus="subMenus" />
    <ProductItems :categorys="'weight'" />
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
      title: '웨이트기구',
      subMenus: [
        {
          name: '덤벨',
          to: 'weight/1'
        },
        {
          name: '케틀벨',
          to: 'weight/2'
        },
        {
          name: '바벨',
          to: 'weight/3'
        },
        {
          name: '플레이트',
          to: 'weight/4'
        },
        {
          name: '정리대',
          to: 'weight/5'
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

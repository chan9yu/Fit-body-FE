<template>
  <v-container>
    <ProductMenu :title="title" :sub-menus="subMenus" />
    <ProductItems />
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
      title: '근력기구',
      subMenus: [
        {
          name: '스미스짐',
          to: 'muscle/1'
        },
        {
          name: '멀티짐',
          to: 'muscle/2'
        },
        {
          name: '멀티랙',
          to: 'muscle/3'
        },
        {
          name: '벤치',
          to: 'muscle/4'
        },
        {
          name: '벤치프레스',
          to: 'muscle/5'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

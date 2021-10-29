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
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <v-container>
    <ProductMenu :title="`${ title }(${ subTitle })`" :sub-menus="subMenus" />
    <ProductItems />
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '유산소기구',
      subMenus: [
        {
          name: '런닝머신',
          to: '1'
        },
        {
          name: '사이클',
          to: '2'
        },
        {
          name: '로잉머신',
          to: '3'
        },
        {
          name: '일립티컬',
          to: '4'
        },
        {
          name: '샌드백',
          to: '5'
        }
      ]
    }
  },

  computed: {
    subTitle () {
      switch (this.$route.params.id) {
        case '1': return '런닝머신'
        case '2': return '사이클'
        case '3': return '로잉머신'
        case '4': return '일립티컬'
        case '5': return '샌드백'
        default: return ''
      }
    }
  }
}
</script>

<style>

</style>

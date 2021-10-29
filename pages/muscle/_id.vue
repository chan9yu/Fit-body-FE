<template>
  <v-container>
    <ProductMenu :title="`${ title }(${ subTitle })`" :sub-menus="subMenus" />
    <ProductItems :sub-categorys="subTitle" />
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '근력기구',
      subMenus: [
        {
          name: '스미스짐',
          to: '1'
        },
        {
          name: '멀티짐',
          to: '2'
        },
        {
          name: '멀티랙',
          to: '3'
        },
        {
          name: '벤치',
          to: '4'
        },
        {
          name: '벤치프레스',
          to: '5'
        }
      ]
    }
  },

  computed: {
    subTitle () {
      switch (this.$route.params.id) {
        case '1': return '스미스짐'
        case '2': return '멀티짐'
        case '3': return '멀티랙'
        case '4': return '벤치'
        case '5': return '벤치프레스'
        default: return ''
      }
    }
  }
}
</script>

<style>

</style>

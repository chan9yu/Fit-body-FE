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
      title: '어시스트',
      subMenus: [
        {
          name: '보조기구',
          to: '1'
        },
        {
          name: '스트랩',
          to: '2'
        },
        {
          name: '매트',
          to: '3'
        },
        {
          name: '튜빙밴드',
          to: '4'
        },
        {
          name: '케이블손잡이',
          to: '5'
        }
      ]
    }
  },
  computed: {
    subTitle () {
      switch (this.$route.params.id) {
        case '1': return '보조기구'
        case '2': return '스트랩'
        case '3': return '매트'
        case '4': return '튜빙밴드'
        case '5': return '케이블손잡이'
        default: return ''
      }
    }
  }
}
</script>

<style>
</style>

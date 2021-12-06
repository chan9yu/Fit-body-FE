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
      title: '웨이트기구',
      subMenus: [
        {
          name: '덤벨',
          to: '1'
        },
        {
          name: '케틀벨',
          to: '2'
        },
        {
          name: '바벨',
          to: '3'
        },
        {
          name: '플레이트',
          to: '4'
        },
        {
          name: '정리대',
          to: '5'
        }
      ]
    }
  },

  head () {
    return {
      title: `Fitbody | ${this.title}-${this.subTitle}`,
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
  },

  computed: {
    subTitle () {
      switch (this.$route.params.id) {
        case '1': return '덤벨'
        case '2': return '케틀벨'
        case '3': return '바벨'
        case '4': return '플레이트'
        case '5': return '정리대'
        default: return ''
      }
    }
  }
}
</script>

<style>

</style>

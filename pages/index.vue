<template>
  <main>
    <MainImage />
    <v-container>
      <BestProduct />
      <NewProduct />
      <Benner />
    </v-container>
  </main>
</template>

<script>
import MainImage from '@/components/home/MainImage'
import BestProduct from '@/components/home/BestProduct'
import NewProduct from '@/components/home/NewProduct'
import Benner from '@/components/home/Benner'

export default {
  components: {
    MainImage,
    BestProduct,
    NewProduct,
    Benner
  },

  head: {
    title: '헬스기구전문 브랜드 Fitody',
    meta: [
      {
        hid: 'og:title',
        property: 'og:title',
        content: '헬스기구전문 브랜드 Fitody'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '헬스기구전문 브랜드 Fitody 입니다.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: require('@/assets/images/carousel/main_2.png')
      }
    ]
  }
}
</script>

<style lang="scss"></style>

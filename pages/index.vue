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
  }
}
</script>

<style lang="scss"></style>

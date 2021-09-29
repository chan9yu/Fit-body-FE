<template>
  <main>
    <MainImage />
    <v-container>
      <BestProduct />
      <NewProduct />
    </v-container>
  </main>
</template>

<script>
import MainImage from '@/components/home/MainImage'
import BestProduct from '@/components/home/BestProduct'
import NewProduct from '@/components/home/NewProduct'

export default {
  components: {
    MainImage,
    BestProduct,
    NewProduct
  }
}
</script>

<style lang="scss"></style>

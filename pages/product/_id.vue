<template>
  <v-container class="mt-5">
    <v-row>
      <v-col cols="12" lg="8">
        <ProductImage />
      </v-col>
      <v-col cols="12" lg="4" class="product-container">
        <ProductDescription />
      </v-col>
    </v-row>
    <WithItems />
  </v-container>
</template>

<script>
import ProductImage from '@/components/product/ProductImage'
import ProductDescription from '@/components/product/ProductDescription'
import WithItems from '@/components/product/WithItems'

export default {
  components: {
    ProductImage,
    ProductDescription,
    WithItems
  }
}
</script>

<style lang="scss" scoped>
</style>

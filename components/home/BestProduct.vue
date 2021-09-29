<template>
  <v-container>
    <v-row>
      <v-col v-for="i in 3" :key="i">
        <v-card>
          <v-img
            :src="require(`@/assets/images/product/best/product_best${i}.png`)"
            :aspect-ratio="16/9"
            width="auto"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
}
</script>

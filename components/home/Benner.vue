<template>
  <v-sheet class="mx-auto" elevation="6">
    <v-slide-group class="pa-4" show-arrows>
      <v-slide-item v-for="i in 8" :key="i">
        <v-img
          :src="require(`@/assets/images/banner/banner_${i}.png`)"
          class="ma-4"
          width="240"
          height="240"
        />
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

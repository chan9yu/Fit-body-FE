<template>
  <v-container class="my-12">
    <div class="text-h4 my-5">
      With Item
    </div>
    <v-row>
      <v-col>
        <div class="withitem-box my-4">
          <v-img
            v-for="index in 4"
            :key="index"
            :aspect-ratio="4/4"
            :width="260"
            src="http://placeimg.com/640/480/people"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.withitem-box {
  display: flex;
  gap: 20px;
}
</style>

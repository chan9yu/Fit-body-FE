<template>
  <div class="alert">
    <v-alert
      v-model="alert"
      color="grey"
      border="left"
      elevation="2"
      colored-border
    >
      You've got <strong>5</strong> new updates on your timeline!.
      <v-icon
        dark
        right
      >
        mdi-checkbox-marked-circle
      </v-icon>
    </v-alert>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['alert'])
  }
}
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
}
</style>

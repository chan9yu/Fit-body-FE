<template>
  <div class="alert">
    <v-alert
      v-model="alert"
      color="grey"
      border="left"
      elevation="2"
      colored-border
      transition="slide-y-transition"
    >
      <span>{{ message }}</span>
      <v-icon class="close-btn" @click="closeAlert">
        mdi-close-circle
      </v-icon>
    </v-alert>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['alert', 'message'])
  },

  // 바꾸자
  updated () {
    this.$nextTick(() => {
      this.autoCloseAlert()
    })
  },

  methods: {
    closeAlert () {
      this.$store.commit('COLSE_ALERT')
    },
    autoCloseAlert () {
      this.timer = setTimeout(() => {
        this.closeAlert()
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  span {
    padding: 0 20px 0 10px;
  }
  .close-btn {
    cursor: pointer;
  }
}
</style>

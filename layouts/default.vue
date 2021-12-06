<template>
  <v-app>
    <Header />
    <v-main>
      <transition name="fade">
        <Nuxt />
      </transition>
    </v-main>
    <Footer />
    <Alert />
  </v-app>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Alert from '@/components/common/Alert.vue'

export default {
  name: 'Default',

  components: {
    Header,
    Footer,
    Alert
  },

  // created () {
  //   this.setUser()
  // },

  methods: {
    async setUser () {
      try {
        await this.$store.dispatch('user/USER')
      } catch (error) {
        this.$store.commit('SET_MESSAGE', error.response.data.message)
        this.$store.dispatch('AUTO_ALERT')
      }
    }
  }
}
</script>

<style lang="scss">
:is(.fade-enter-active, .fade-leave-active) {
  transition: opacity .5s;
}
:is(.fade-enter, .fade-leave-to) {
  opacity: 0;
}
</style>

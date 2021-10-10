<template>
  <v-app>
    <Header />
    <v-main>
      <transition name="fade">
        <Nuxt />
      </transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Cookies from 'js-cookie'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export default {
  name: 'Default',

  components: {
    Header,
    Footer
  },

  created () {
    this.userInfo()
  },

  methods: {
    userInfo () {
      const value = Cookies.get('auth')
      this.$store.commit('user/SET_TOKEN', value)
      if (value) {
        this.$store.dispatch('user/USER')
      }
    }
  }
}
</script>

<style lang="scss">
// 라우터 트랜지션
:is(.fade-enter-active, .fade-leave-active) {
  transition: opacity .5s;
}

:is(.fade-enter, .fade-leave-to) {
  opacity: 0;
}
</style>

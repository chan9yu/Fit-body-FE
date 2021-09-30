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
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
// 라우터 트랜지션
:is(.fade-enter-active, .fade-leave-active) {
  transition: opacity .9s;
}

:is(.fade-enter, .fade-leave-to) {
  opacity: 0;
}
</style>

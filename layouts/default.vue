<template>
  <v-app>
    <Header />
    <v-main>
      <transition name="fade">
        <Nuxt />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/common/Header'

export default {
  components: {
    Header
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

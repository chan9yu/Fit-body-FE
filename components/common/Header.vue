<template>
  <header>
    <v-toolbar dark color="green">
      <v-toobar-title>
        <Logo />
      </v-toobar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text nuxt to="/profile">
          <div>프로필</div>
        </v-btn>
        <v-btn text nuxt to="/signup">
          <div>회원가입</div>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </header>
</template>

<script>
import Logo from '@/components/common/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>

</style>

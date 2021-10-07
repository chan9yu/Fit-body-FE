<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <div class="text-h4 mb-10">
              로그인
            </div>
            <LoginForm />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from '@/components/user/LoginForm'

export default {
  components: {
    LoginForm
  }
}
</script>

<style lang="scss" scoped>

</style>

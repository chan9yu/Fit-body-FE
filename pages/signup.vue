<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <div class="text-h4 mb-10">
              회원가입
            </div>
            <SignupForm />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SignupForm from '@/components/user/SignupForm'

export default {
  components: {
    SignupForm
  }
}
</script>

<style lang="scss" scoped>

</style>

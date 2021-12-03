<template>
  <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="이메일"
      type="email"
      clearable
      prepend-icon="mdi-email"
    />
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="비밀번호"
      type="password"
      clearable
      prepend-icon="mdi-lock-outline"
    />
    <v-btn
      class="mt-6 font-weight-thin"
      block
      x-large
      rounded
      color="primary"
      type="submit"
      :disabled="!valid"
    >
      로그인
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || '이메일을 입력해 주세요!',
        v => /.+@.+\..+/.test(v) || '이메일이 유효하지 않습니다!'
      ],
      passwordRules: [v => !!v || '비밀번호를 입력해 주세요!']
    }
  },

  methods: {
    async onSubmitForm () {
      if (this.$refs.form.validate()) {
        try {
          await this.$store.dispatch('user/LOGIN', {
            email: this.email,
            password: this.password
          })
          this.$store.commit('SET_MESSAGE', '로그인이 되었습니다.')
          this.$store.commit('OPEN_ALERT')
          this.$router.push('/')
        } catch (error) {
          this.$store.commit('SET_MESSAGE', error.response.data.message)
          this.$store.commit('OPEN_ALERT')
        }
      } else {
        this.$store.commit('SET_MESSAGE', '빈칸이 있으면 안 됩니다.')
        this.$store.commit('OPEN_ALERT')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

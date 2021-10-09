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
      v-model="name"
      :rules="nameRules"
      label="이름"
      type="text"
      clearable
      prepend-icon="mdi-account"
    />
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      type="password"
      label="비밀번호"
      clearable
      prepend-icon="mdi-lock-outline"
    />
    <v-text-field
      v-model="passwordCheck"
      :rules="passwordCheckRules"
      label="비밀번호확인"
      type="password"
      clearable
      prepend-icon="mdi-lock-check-outline"
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
      가입하기
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      email: '',
      name: '',
      password: '',
      passwordCheck: '',
      emailRules: [
        v => !!v || '이메일을 입력해 주세요!',
        v => /.+@.+\..+/.test(v) || '이메일이 유효하지 않습니다!'
      ],
      nameRules: [v => !!v || '이름을 입력해 주세요!'],
      passwordRules: [v => !!v || '비밀번호를 입력해 주세요!'],
      passwordCheckRules: [
        v => !!v || '비밀번호 확인을 해주세요!',
        v => v === this.password || '비밀번호가 일치하지 않습니다!'
      ]
    }
  },

  methods: {
    async onSubmitForm () {
      if (this.$refs.form.validate()) {
        try {
          const data = {
            email: this.email,
            name: this.name,
            password: this.password
          }
          await this.$store.dispatch('user/SIGNUP', data)
          alert('가입이 완료되었습니다.')
          this.$router.push('/login')
        } catch (error) {
          alert(error.response.data.message)
        }
      } else {
        alert('빈칸이 있으면 안 됩니다.')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

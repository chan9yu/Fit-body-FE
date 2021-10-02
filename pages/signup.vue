<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <div class="text-h4 mb-10">
              회원가입
            </div>
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
    onSubmitForm () {
      if (this.$refs.form.validate()) {
        alert('회원가입 테스트!')
      } else {
        alert('빈칸이 있으면 안 됩니다.')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

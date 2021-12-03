<template>
  <v-container>
    <form @submit.prevent="onSubmitComment">
      <v-textarea
        v-model="content"
        label="내용을 입력해주세요!"
        auto-grow
        outlined
        rows="3"
        row-height="45"
        clearable
      />
      <v-btn :disabled="!content" type="submit" class="comment-btn">
        <v-icon left>
          mdi-pencil
        </v-icon>
        등록하기
      </v-btn>
    </form>
  </v-container>
</template>

<script>
export default {
  props: {
    productId: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      content: '',
      comment: null
    }
  },

  methods: {
    async onSubmitComment () {
      try {
        const commentData = { productId: this.productId, content: this.content }
        await this.$store.dispatch('comment/POST_COMMENT', commentData)
        this.$store.commit('SET_MESSAGE', '댓글이 등록되었습니다.')
        this.$store.commit('OPEN_ALERT')
        this.content = ''
      } catch (error) {
        this.$store.commit('SET_MESSAGE', error.response.data.message)
        this.$store.commit('OPEN_ALERT')
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.comment-btn {
  display: block;
  margin-left: auto;
}
</style>

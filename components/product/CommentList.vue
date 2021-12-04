<template>
  <div>
    <CommentForm :product-id="productId" @commentUpdate="commentUpdate" />
    <template v-if="noComments">
      <v-simple-table class="mt-5">
        <template #default>
          <tbody>
            <tr v-for="comment in comments" :key="comment._id">
              <td class="avatar-td">
                <v-avatar
                  color="blue-grey lighten-1"
                  size="48"
                >
                  <span class="white--text text-h6">
                    {{ commentAvatarName(comment.user) }}
                  </span>
                </v-avatar>
              </td>
              <td class="text-left">
                {{ comment.content }}
              </td>
              <td class="text-right" style="width: 200px">
                {{ commentDateFormat(comment.createdAt) }}
              </td>
              <td style="width: 64px">
                <v-btn @click="onClickremoveComment(comment._id)">
                  삭제
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </template>
    <p v-else class="text-h6 font-weight-regular text-center my-10">
      댓글이 없네요.. 첫 댓글을 써주세요!
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import dayjs from 'dayjs'
import CommentForm from '@/components/product/CommentForm'

export default {
  components: {
    CommentForm
  },

  props: {
    productId: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapState('comment', ['comments']),
    noComments () {
      return this.comments.length !== 0
    }
  },

  created () {
    this.fetchCommentsList()
  },

  methods: {
    async fetchCommentsList () {
      try {
        const { id } = this.$route.params
        await this.$store.dispatch('comment/FATCH_COMMENT_INFO', id)
      } catch (error) {
        this.$store.commit('SET_MESSAGE', error.response.data.message)
        this.$store.dispatch('AUTO_ALERT')
      }
    },
    async onClickremoveComment (commentId) {
      try {
        await this.$store.dispatch('comment/REMOVE_COMMENT', commentId)
        this.$store.commit('SET_MESSAGE', '삭제가 완료되었습니다.')
        this.$store.dispatch('AUTO_ALERT')
        this.fetchCommentsList()
      } catch (error) {
        this.$store.commit('SET_MESSAGE', error.response.data.message)
        this.$store.dispatch('AUTO_ALERT')
      }
    },
    commentUpdate () {
      this.fetchCommentsList()
    },
    commentAvatarName (name) {
      if (typeof name === 'string') {
        return name.substr(0, 2)
      }
    },
    commentDateFormat (date) {
      return dayjs(date).format('YYYY년 MM월 DD일 HH:mm')
    }
  }
}
</script>

<style lang="scss" scoped>
tr {
  height: 80px;
  td {
    vertical-align: middle;
  }
}

.avatar-td {
  width: 48px;
}

p {
  color: #aaa;
}
</style>

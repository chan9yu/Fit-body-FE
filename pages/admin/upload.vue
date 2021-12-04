<template>
  <v-container>
    <v-card class="mt-5">
      <UploadForm />
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import UploadForm from '@/components/upload/UploadForm'

export default {
  components: {
    UploadForm
  },

  computed: {
    ...mapState('user', ['user'])
  },

  created () {
    this.adminVaild()
  },

  methods: {
    adminVaild () {
      if (this.user.role === 0) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

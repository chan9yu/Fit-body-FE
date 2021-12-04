<template>
  <v-container>
    <v-form ref="form" v-model="valid" class="px-10" @submit.prevent="onSubmitForm">
      <v-text-field
        v-model="title"
        :counter="50"
        :rules="titleRules"
        label="상품 이름"
        required
      />
      <v-text-field
        v-model="description"
        :rules="descriptionRules"
        label="상품 설명"
        required
      />
      <v-text-field
        v-model="price"
        :rules="priceRules"
        label="상품 가격"
        required
      />
      <v-row>
        <v-col cols="6">
          <v-select
            v-model="categorys"
            class="mt-4"
            :items="items"
            label="메인 카테고리"
            outlined
          />
        </v-col>
        <v-col cols="6">
          <v-select
            v-model="subCategorys"
            class="mt-4"
            :items="subItems[categorys]"
            :disabled="!categorys"
            label="서브 카테고리"
            outlined
          />
        </v-col>
      </v-row>
      <input ref="imageInput" type="file" multiple hidden @change="onChangeImages">
      <div class="button-box">
        <v-btn type="button" @click="onClickImageUpload">
          이미지 업로드
        </v-btn>
        <v-btn type="submit" :disabled="!valid">
          상품 등록 하기
        </v-btn>
      </div>
    </v-form>
    <ImageBox :images="images" @imageDelete="imageDelete" />
  </v-container>
</template>

<script>
import ImageBox from '@/components/upload/ImageBox'

export default {
  components: {
    ImageBox
  },

  data () {
    return {
      valid: false,
      images: [],
      title: '',
      description: '',
      price: 0,
      categorys: '',
      subCategorys: '',
      items: ['muscle', 'aerobic', 'weight', 'assist'],
      subItems: {
        muscle: ['스미스짐', '멀티짐', '멀티랙', '벤치', '벤치프레스'],
        aerobic: ['런닝머신', '사이클', '로잉머신', '일립티컬', '샌드백'],
        weight: ['덤벨', '케틀벨', '바벨', '플레이트', '정리대'],
        assist: ['보조기구', '스트랩', '매트', '튜빙밴드', '케이블손잡이']
      },
      imageRules: [v => !!v || '상품 이미지를 업로드 해주세요!'],
      titleRules: [v => !!v || '상품 제목을 입력해 주세요!'],
      descriptionRules: [v => !!v || '상품 설명을 입력해 주세요!'],
      priceRules: [v => !!v || '상품 가격을 입력해 주세요!']
    }
  },

  methods: {
    onClickImageUpload () {
      this.$refs.imageInput.click()
    },
    async onChangeImages (e) {
      try {
        const { files } = e.target
        const formData = new FormData()
        formData.append('file', files[0])
        const res = await this.$store.dispatch('post/IMAGE_UPLOAD', formData)
        this.images = [...this.images, res.fileName]
      } catch (error) {
        this.$store.commit('SET_MESSAGE', error.response.data.message)
        this.$store.dispatch('AUTO_ALERT')
      }
    },
    async onSubmitForm () {
      try {
        const productInfo = {
          images: this.images,
          title: this.title,
          description: this.description,
          price: this.price,
          categorys: this.categorys,
          subCategorys: this.subCategorys
        }
        await this.$store.dispatch('post/PRODUCT_UPLOAD', productInfo)
        this.clearFormInput()
      } catch (error) {
        this.$store.commit('SET_MESSAGE', error.response.data.message)
        this.$store.dispatch('AUTO_ALERT')
      }
    },
    imageDelete (image) {
      const index = this.images.indexOf(image)
      const newImage = [...this.images]
      newImage.splice(index, 1)
      this.images = newImage
    },
    clearFormInput () {
      this.images = []
      this.title = ' '
      this.description = ' '
      this.price = 1
      this.categorys = ' '
      this.subCategorys = ' '
    }
  }
}
</script>

<style lang="scss" scoped>
.button-box {
  display: flex;
  justify-content: space-between;
}
</style>

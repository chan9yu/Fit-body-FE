<template>
  <v-container class="mt-16">
    <p class="text-h3 font-weight-regular text-center my-16">
      All Products
    </p>
    <v-row>
      <v-col v-for="index in 16" :key="index" cols="12" lg="3" md="4">
        <v-hover>
          <template #default="{ hover }">
            <v-card>
              <v-img
                src="http://placeimg.com/640/480/people"
                :aspect-ratio="8/8"
                width="auto"
              />
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  :z-index="zIndex"
                  color="#2c3e50"
                >
                  <div class="text-center">
                    <div class="text-h6 pa-2">
                      [카테고리]상품제목이 들어가는 부분입니다.
                    </div>
                    <div class="subtitle-1 font-weight-thin pa-2">
                      1,000,000원
                    </div>
                    <v-btn>상품보러가기</v-btn>
                  </div>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-btn text class="text-h4 font-weight-regular my-16">
        - LOAD MORE -
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      overlay: false,
      zIndex: 0
    }
  }
}
</script>

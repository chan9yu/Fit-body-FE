<template>
  <v-container class="mt-5">
    <!-- 상품 이미지 부분 -->
    <v-row>
      <v-col cols="12" lg="8">
        <v-container>
          <v-img
            :aspect-ratio="5/3"
            src="http://placeimg.com/640/480/people"
          />
          <div class="mt-5 images-box">
            <div v-for="index in 4" :key="index">
              <v-img
                :aspect-ratio="4/4"
                :width="260"
                src="http://placeimg.com/640/480/people"
              />
            </div>
          </div>
        </v-container>
      </v-col>
      <!-- 상품 상세 정보 부분 -->
      <v-col cols="12" lg="4" class="product-container">
        <v-container>
          <div class="product-content">
            <div class="mb-12">
              <div class="text-h6 text--secondary mb-12">
                근력기구 > 덤벨
              </div>
              <div class="text-h4 mb-4">
                프리시전 누오 무게조절덤벨 32kg I
                누오정품 2kg단위 무게조절
              </div>
              <div class="text-h6 mb-2 text--secondary">
                Price
              </div>
              <div class="text-h4">
                250,000원
              </div>
            </div>
            <v-divider />
            <div class="product-counting my-8">
              <div class="input-box">
                <span class="text-subtitle-2">EA</span>
                <input type="number" value="1" max="5">
              </div>
              <span class="text-h6">250,000원</span>
            </div>
            <v-divider />
            <div class="prouduct-price my-8">
              <span class="text-h6 text--secondary">Price</span>
              <span class="text-h6">250,000원</span>
            </div>
            <v-divider />
            <div class="prouduct-price my-8">
              <span class="text-h6 text--secondary">Total</span>
              <span class="text-h6">250,000원</span>
            </div>
            <div class="product-btns">
              <v-btn>
                구매하기
              </v-btn>
              <v-btn>
                장바구니
              </v-btn>
            </div>
          </div>
        </v-container>
      </v-col>
    </v-row>
    <v-container class="mt-12">
      <span class="text-h4">With Item</span>
      <v-row>
        <v-col>
          <div class="withitem-box my-4">
            <v-img
              v-for="index in 4"
              :key="index"
              :aspect-ratio="4/4"
              :width="260"
              src="http://placeimg.com/640/480/people"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.images-box {
  display: flex;
  justify-content: space-between;
}

.product-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .product-content {
    display: flex;
    flex-direction: column;
    .product-counting {
      display: flex;
      gap: 10px;
      .input-box {
        display: flex;
        align-items: center;
        gap: 10px;
        > input {
          width: 30px;
        }
      }
    }
    .prouduct-price {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .product-btns {
      display: flex;
      gap: 10px;
      > * {
        width: 50%;
      }
    }
  }
}

.withitem-box {
  display: flex;
  gap: 20px;
}
</style>

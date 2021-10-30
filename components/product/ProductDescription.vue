<template>
  <v-container>
    <div class="product-content">
      <div class="mb-12">
        <div class="text-h6 text--secondary mb-12">
          {{ product[0].categorys }} > {{ product[0].subCategorys }}
        </div>
        <div class="text-h4 mb-4">
          {{ product[0].title }}
        </div>
        <div class="text-h8 mb-4">
          {{ product[0].description }}
        </div>
        <div class="text-h6 mb-2 text--secondary">
          Price
        </div>
        <div class="text-h4">
          {{ price }}원
        </div>
      </div>
      <v-divider />
      <div class="product-counting my-8">
        <!-- 상품의 갯수만큼 가격증가 -->
        <div class="input-box">
          <span class="text-subtitle-2">EA</span>
          <input type="number" value="1" max="5">
        </div>
        <span class="text-h6">{{ price }}원</span>
      </div>
      <v-divider />
      <div class="prouduct-price my-8">
        <span class="text-h6 text--secondary">Price</span>
        <span class="text-h6">{{ price }}원</span>
      </div>
      <v-divider />
      <div class="prouduct-price my-8">
        <span class="text-h6 text--secondary">Total</span>
        <span class="text-h6">{{ price }}원</span>
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
</template>

<script>
export default {
  props: {
    product: {
      type: Array,
      required: true
    }
  },

  computed: {
    price () {
      return this.product[0].price.toLocaleString()
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>

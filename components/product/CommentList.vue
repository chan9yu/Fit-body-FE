<template>
  <div>
    <CommentForm :product-id="productId" />
    <v-simple-table>
      <template #default>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Calories
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
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
  }

}
</script>

<style lang="scss" scoped>

</style>

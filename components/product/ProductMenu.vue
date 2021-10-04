<template>
  <v-container class="mt-6">
    <div class="text-center text-h4">
      {{ title }}
    </div>
    <ul class="mt-5">
      <li v-for="subMenu in subMenus" :key="subMenu.name">
        <NuxtLink :to="subMenu.to">
          {{ subMenu.name }}
        </NuxtLink>
      </li>
    </ul>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subMenus: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 0;
}
</style>

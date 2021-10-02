<template>
  <div class="logo">
    <NuxtLink to="/">
      Fit body
    </NuxtLink>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.logo {
  > a {
    @include font-size(30);
    color: #333;
    text-decoration: none;
  }
}
</style>

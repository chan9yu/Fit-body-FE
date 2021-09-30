<template>
  <v-footer dark padless>
    <v-card flat tile class="blue-grey lighten-5 text-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 text--secondary"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="px-16 text--secondary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt eligendi odio dicta hic mollitia illum, atque natus. Nesciunt iste quis numquam doloribus, ab necessitatibus laboriosam minus commodi saepe totam cum!
        Expedita fugit neque dignissimos beatae ea ducimus ab, culpa voluptatibus eveniet, quisquam porro velit sed voluptate explicabo, autem deleniti. Pariatur, suscipit. Cupiditate nobis voluptatibus nam numquam debitis velit quod pariatur!
        Dicta, labore officiis! Ipsa recusandae, aspernatur dolores dicta commodi amet nisi dolorem blanditiis? Beatae tenetur saepe, reiciendis, dolore quidem commodi ipsam ab libero necessitatibus debitis cum in qui optio labore.
        Dignissimos soluta a laudantium eius architecto debitis blanditiis, impedit qui laboriosam eos esse itaque accusantium! Ab quae possimus molestiae, voluptatum, recusandae cum dolor assumenda commodi repudiandae neque natus, incidunt quis?
      </v-card-text>
      <v-divider />
      <v-card-text class="text--secondary">
        {{ new Date().getFullYear() }} — <strong>Fit body</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>

<template>
  <nav>
    <v-app-bar app height="80" class="pl-10 pr-10">
      <v-app-bar-title>
        <Logo />
      </v-app-bar-title>
      <v-spacer />
      <template v-if="!mdDown">
        <v-toolbar-items
          v-for="nav in navs"
          :key="nav.name"
        >
          <v-btn text nuxt :to="nav.to">
            <div class="font-weight-regular">
              {{ nav.name }}
            </div>
          </v-btn>
        </v-toolbar-items>
        <v-spacer />
        <!-- 로그인 유무 분기 처리 -->
        <v-toolbar-items
          v-for="beforeLoginNav in beforeLoginNavs"
          :key="beforeLoginNav.name"
        >
          <v-btn text nuxt :to="beforeLoginNav.to">
            <div class="font-weight-regular">
              {{ beforeLoginNav.name }}
            </div>
          </v-btn>
        </v-toolbar-items>
      </template>
      <v-app-bar-nav-icon v-else app @click.stop="drawer = !drawer" />
    </v-app-bar>
    <!-- mobile navigation -->
    <v-navigation-drawer v-if="mdDown" v-model="drawer" app right>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5 pa-2">
            Fit body
          </v-list-item-title>
          <v-list-item-subtitle class="pl-2">
            헬스전문기구브랜드
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list dense nav>
        <v-list-item
          v-for="nav in navs"
          :key="nav.name"
          link
          :to="nav.to"
          class="py-1"
          active-class="primary lighten-2"
        >
          <v-list-item-icon>
            <v-icon>{{ nav.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ nav.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <!-- 로그인 유무 분기 처리 -->
      <v-list dense nav>
        <v-list-item
          v-for="beforeLoginNav in beforeLoginNavs"
          :key="beforeLoginNav.name"
          link
          :to="beforeLoginNav.to"
          class="py-1"
          active-class="primary lighten-2"
        >
          <v-list-item-icon>
            <v-icon>{{ beforeLoginNav.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ beforeLoginNav.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Logo from '@/components/common/Logo'

export default {
  components: {
    Logo
  },

  data () {
    return {
      navs: [
        { name: '근력기구', to: '/category/muscle', icon: 'mdi-weight-lifter' },
        { name: '유산소기구', to: '/category/aerobic', icon: 'mdi-human-scooter' },
        { name: '악세사리', to: '/category/accessories', icon: 'mdi-handball' },
        { name: '어시스트', to: '/category/assist', icon: 'mdi-hand-front-left' }
      ],
      beforeLoginNavs: [
        { name: '로그인', to: '/login', icon: 'mdi-login' },
        { name: '회원가입', to: '/signup', icon: 'mdi-account' }
      ],
      afterLoginNavs: [
        { name: '장바구니', to: '/login', icon: 'mdi-cart' },
        { name: '로그아웃', to: '/logout', icon: 'mdi-logout' }
      ],
      drawer: false
    }
  },

  computed: {
    mdDown () {
      return this.$vuetify.breakpoint.mdAndDown
    }
  }
}
</script>

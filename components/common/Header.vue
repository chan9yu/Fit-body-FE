<template>
  <nav>
    <v-app-bar app :height="appBarHeight" class="pl-10 pr-10 app-header">
      <v-app-bar-title>
        <Logo />
      </v-app-bar-title>
      <v-spacer />
      <template v-if="!mdDown">
        <!-- 카테고리 메뉴 -->
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
        <!-- 로그인 정보가 있으면 -->
        <template v-if="user !== null">
          <v-toolbar-items
            v-for="afterLoginNav in afterLoginNavs"
            :key="afterLoginNav.name"
          >
            <v-btn text nuxt :to="afterLoginNav.to">
              <div class="font-weight-regular" @click="onClickButton(afterLoginNav.data)">
                {{ afterLoginNav.name }}
              </div>
            </v-btn>
          </v-toolbar-items>
        </template>
        <!-- 로그인 정보가 없으면 -->
        <template v-else>
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
      <v-list dense nav>
        <!-- 로그인 유무 분기 처리 -->
        <!-- 로그인 정보가 있으면 -->
        <template v-if="user !== null">
          <v-list-item
            v-for="afterLoginNav in afterLoginNavs"
            :key="afterLoginNav.name"
            link
            :to="afterLoginNav.to"
            class="py-1"
            active-class="primary lighten-2"
          >
            <v-list-item-icon>
              <v-icon>{{ afterLoginNav.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ afterLoginNav.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <!-- 로그인 정보가 없으면 -->
        <template v-else>
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
        </template>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '@/components/common/Logo'

export default {
  components: {
    Logo
  },

  data () {
    return {
      navs: [
        { name: '근력기구', to: '/muscle', icon: 'mdi-weight-lifter' },
        { name: '유산소기구', to: '/aerobic', icon: 'mdi-human-scooter' },
        { name: '웨이트기구', to: '/weight', icon: 'mdi-handball' },
        { name: '어시스트', to: '/assist', icon: 'mdi-hand-front-left' }
      ],
      beforeLoginNavs: [
        { name: '로그인', to: '/login', icon: 'mdi-login' },
        { name: '회원가입', to: '/signup', icon: 'mdi-account' }
      ],
      afterLoginNavs: [
        { name: '내 정보', to: '/mypage', data: 'MyPage', icon: 'mdi-account' },
        { name: '장바구니', to: '/cart', data: 'Cart', icon: 'mdi-cart' },
        { name: '로그아웃', data: 'Logout', icon: 'mdi-logout' }
      ],
      drawer: false
    }
  },

  computed: {
    ...mapState('user', ['user']),
    mdDown () {
      return this.$vuetify.breakpoint.mdAndDown
    },
    appBarHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 50
        case 'sm': return 60
        case 'md': return 70
        case 'lg': return 75
        case 'xl': return 80
        default: return null
      }
    }
  },

  watch: {
    user (val, oldVal) {
      if (val === null) {
        if (val !== oldVal) {
          this.setUser()
        }
      }
    }
  },

  mounted () {
    this.setUser()
  },

  methods: {
    // 각 버튼 마다 다른 기능 제공
    onClickButton (data) {
      switch (data) {
        case 'Logout':
          this.$store.dispatch('user/LOGOUT')
          this.$store.commit('SET_MESSAGE', '로그아웃을 하였습니다!')
          this.$store.dispatch('AUTO_ALERT')
          this.$router.replace('/')
          break
        default:
          break
      }
    },
    async setUser () {
      try {
        await this.$store.dispatch('user/USER')
      } catch (error) {
        this.$store.commit('SET_MESSAGE', error.response.data.message)
        this.$store.dispatch('AUTO_ALERT')
      }
    }
  }
}

</script>

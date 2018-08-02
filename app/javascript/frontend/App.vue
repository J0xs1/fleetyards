<template>
  <div
    id="app"
    :class="{
      'navbar-visible': !navbarCollapsed,
    }"
    class="app-body"
  >
    <div
      :style="`background-image: url(${$store.state.backgroundImage})`"
      class="background-image"
    />
    <transition
      name="fade"
      mode="out-in"
      appear
    >
      <Navigation
        v-show="!$route.meta.hideNavigation"
        ref="navigation"
      />
    </transition>
    <transition
      name="fade"
      mode="out-in"
      appear
    >
      <router-view class="main" />
    </transition>
    <BackToTop visible-offset="500" />
    <AppFooter class="app-footer" />
  </div>
</template>

<script>
import BackToTop from 'frontend/components/BackToTop'
import Updates from 'frontend/mixins/Updates'
import CurrentUser from 'frontend/mixins/CurrentUser'
import Navigation from 'frontend/partials/Navigation'
import AppFooter from 'frontend/partials/AppFooter'
import { mapGetters } from 'vuex'
import { requestPermission } from 'frontend/lib/Noty'

export default {
  name: 'App',
  components: {
    Navigation,
    AppFooter,
    BackToTop,
  },
  mixins: [Updates, CurrentUser],
  computed: {
    ...mapGetters([
      'isAuthenticated',
      'navbarCollapsed',
      'overlayVisible',
    ]),
  },
  watch: {
    $route: 'setBackground',
    navbarCollapsed: 'setNoScroll',
    overlayVisible: 'setNoScroll',
    isAuthenticated() {
      if (this.isAuthenticated) {
        requestPermission()
        this.fetchHangar()
      }
    },
  },
  created() {
    this.setNoScroll()
    this.setBackground()
    this.redirectToLastRoute()

    if (this.isAuthenticated) {
      requestPermission()
      this.fetchHangar()
    }

    window.addEventListener('online', () => {
      this.$store.commit('setOnlineStatus', true)
    })

    window.addEventListener('offline', () => {
      this.$store.commit('setOnlineStatus', false)
    })
  },
  methods: {
    setNoScroll() {
      if (!this.navbarCollapsed || this.overlayVisible) {
        document.documentElement.classList.add('no-scroll')
        document.body.classList.add('no-scroll')
      } else {
        document.documentElement.classList.remove('no-scroll')
        document.body.classList.remove('no-scroll')
      }
    },
    setBackground() {
      let { backgroundImage } = this.$route.meta
      if (!backgroundImage) {
        // eslint-disable-next-line global-require
        backgroundImage = require('images/bg-0.jpg')
      }
      this.$store.commit('setBackgroundImage', backgroundImage)
    },
    redirectToLastRoute() {
      if (!this.$store.state.lastRoute || !navigator.standalone) {
        return
      }
      if (this.$store.state.lastRoute.name !== this.$route.name) {
        this.$router.replace(this.$store.state.lastRoute)
      }
    },
    fetchHangar() {
      this.$api.get('vehicles', {}, (args) => {
        if (!args.error) {
          this.$store.commit('setHangar', args.data.map(item => item.model.slug))
        }
      })
    },
  },
}
</script>
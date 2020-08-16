<template>
  <div id="app">
    <Navigation v-if="!mobileView" />
    <MobileNavigation v-if="mobileView" />

    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import MobileNavigation from '@/components/mobile/Navigation'

export default {
  name: 'App',
  components: {
    Navigation,
    MobileNavigation,
  },
  data() {
    return {
      mobileView: true,
      showNav: false,
    }
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth < 1080
    },
  },
  created() {
    this.handleView()
  },
}
</script>

<style lang="scss">
  @import './styles/App.scss';
</style>

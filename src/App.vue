<template>
  <div id="app">
    <Navigation v-if="!mobileView" />
    <MobileNavigation v-if="mobileView" />

    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import MobileNavigation from '@/components/mobile/Navigation.vue'

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
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990
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

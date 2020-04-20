import Vue from 'vue'
import { NavbarPlugin, BootstrapVue } from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon.vue'

import App from './App.vue'
import router from './router'
import store from './store'

import 'vue-awesome/icons/trash'
import 'vue-awesome/icons/regular/window-close'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(NavbarPlugin)

// import globally
Vue.component('v-icon', Icon)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import { NavbarPlugin, BootstrapVue } from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon.vue'

import App from './App.vue'
import router from './router'
import store from './store'

import VueI18n from 'vue-i18n'

import 'vue-awesome/icons/trash'
import 'vue-awesome/icons/regular/window-close'

Vue.use(VueI18n)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(NavbarPlugin)

// import globally
Vue.component('v-icon', Icon)

const messages = {
  en: {
    message: {
      about: 'en: This is an about page',
    }
  },
  pl: {
    message: {
      about: 'Harmony to harmonia',
    }
  }
}

export const i18n = new VueI18n({
  locale: 'pl',
  fallbackLocale: 'pl',
  messages,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')

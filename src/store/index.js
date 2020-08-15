import Vue from 'vue'
import Vuex from 'vuex'

import elements from './elements'
import { navigation } from './navigation'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict mode in the dev environment.
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    elements,
    navigation,
  },
})

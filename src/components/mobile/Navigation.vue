<template>
  <b-navbar id="mobile-nav" toggleable type="dark">
    <b-navbar-toggle target="navbar-toggle-collapse">
      <template v-slot:default="{ expanded }">
        <v-icon class="bars" name="bars" scale="1.5" />
      </template>
    </b-navbar-toggle>

    <!-- <b-navbar-brand>Harmony</b-navbar-brand> -->

    <b-form-input id="mobile-navsearch" size="sm" class="ml-auto"
      v-bind:placeholder="$t('word.search') " v-model="navSearchStr">
    </b-form-input>
    <b-nav-form class="ml-1 mr-auto">
      <b-button v-b-toggle.collapse-addobject class="blue-glow" size="sm"> + </b-button>
    </b-nav-form>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">

        <b-nav-item>
          <router-link tag="li" to="/mainview"> {{ $t('word.home') }} </router-link>
        </b-nav-item>
        <b-nav-item disabled>
          <router-link tag="li" to="/about"> {{ $t('word.contact') }}  </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link tag="li" to="/about"> {{ $t('word.about') }}  </router-link>
        </b-nav-item>

        <b-nav-item-dropdown v-bind:text="$t('word.user')">
          <b-dropdown-item  style="text-color: white"> {{ $t('word.profile') }} </b-dropdown-item>
          <b-dropdown-item> {{ $t('word.sign_out') }} </b-dropdown-item>
        </b-nav-item-dropdown>

        <hr class="horizontal-divider">

        <b-nav-item-dropdown v-bind:text="langSelected">
          <option v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang">
            <b-dropdown-item @click="langSelected=lang">
              {{ lang }}
            </b-dropdown-item>
          </option>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

import debounce from 'lodash.debounce'
import { i18n } from '@/main.js';
import store from '@/store'

export default {
  name: 'MobileNavigation',
  data() {
    return {
      langs: ['Polski','English'],
      langSelected: 'Polski',
      navSearchStr: '',
    }
  },
  methods: {
    transLang(lang) {
      if(lang === 'Polski') {
        return 'pl'
      }
      if(lang === 'English') {
        return 'en'
      }
      return 'Unknown'
    },
  },
  watch: {
    langSelected: function(value) {
      let trans = this.transLang(value)
      console.log("Language change to:", trans)
      i18n.locale = trans
    },
    navSearchStr: debounce(function(value) {
      store.commit('navigation/setSearchStr', { searchStr: value })
    }, 500),
  },
}
</script>
<style lang="scss">
  @import '@/styles/General.scss';
  @import '@/styles/Icons.scss';
</style>

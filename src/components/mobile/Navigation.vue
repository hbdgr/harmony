<template>
  <b-navbar id="mobile-nav" toggleable type="dark">

    <!-- <b-navbar-brand href="#">Harmony</b-navbar-brand> -->

    <b-form-input id="navsearch" size="sm" class="mr-sm-2" v-bind:placeholder="$t('word.search') " v-model="navSearchStr"></b-form-input>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template v-slot:default="{ expanded }">
        <v-icon class="bars" name="bars" scale="1.5" />
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">

        <b-nav-item href="#">
          <router-link tag="li" to="/"> {{ $t('word.home') }} </router-link>
        </b-nav-item>
        <b-nav-item href="#" disabled>
          <router-link tag="li" to="/about"> {{ $t('word.contact') }}  </router-link>
        </b-nav-item>
        <b-nav-item href="#">
          <router-link tag="li" to="/about"> {{ $t('word.about') }}  </router-link>
        </b-nav-item>


        <b-nav-item-dropdown>
          <template slot="lang"><em> {{ $t('word.lang') }} </em></template>
          <option v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang">
            <b-dropdown-item @click="langSelected=lang" href="#">
              {{ lang.toUpperCase() }}
            </b-dropdown-item>
          </option>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown>
          <template slot="button-content"><em> {{ $t('word.user') }} </em></template>
          <b-dropdown-item href="#"> {{ $t('word.profile') }} </b-dropdown-item>
          <b-dropdown-item href="#"> {{ $t('word.sign_out') }} </b-dropdown-item>
        </b-nav-item-dropdown>


      </b-navbar-nav>
    </b-collapse>


  </b-navbar>
</template>

<script>
import { i18n } from "@/main.js";
import store from '@/store'

import debounce from 'lodash.debounce'

export default {
  name: 'MobileNavigation',
  data() {
    return {
      langs: ['pl','en'],
      langSelected: 'pl',
      navSearchStr: '',
    }
  },
  watch: {
    langSelected: function(value) {
      console.log("Language change to:", value)
      i18n.locale = value
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

<template>
  <b-navbar id="mobile-nav" toggleable type="dark">
    <b-navbar-toggle target="navbar-toggle-collapse">
      <template v-slot:default="{ expanded }">
        <v-icon class="bars" name="bars" scale="1.5" />
      </template>
    </b-navbar-toggle>

    <!-- <b-navbar-brand href="#">Harmony</b-navbar-brand> -->

    <b-nav-form class=>
      <b-form-input left id="mobile-navsearch" size="mr-sm-1" class="" v-bind:placeholder="$t('word.search') " v-model="navsearchstr">
      </b-form-input>
    </b-nav-form>

    <b-navbar-nav>
      <b-nav-item-dropdown class="mr-4" right style="width: 30px" v-bind:text="langSelected">
        <option v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang">
          <b-dropdown-item @click="langSelected=lang" href="#">
            {{ lang }}
          </b-dropdown-item>
        </option>
      </b-nav-item-dropdown>
    </b-navbar-nav>


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

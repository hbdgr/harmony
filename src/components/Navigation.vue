<template>
  <div id="nav">
    <b-navbar id="navbar" toggleable="lg" type="dark" fixed="top">
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-brand class="ml-auto" href="#">Harmony</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-navbar-nav  class="ml-0" style="width: 300px">
          <b-nav-item href="#">
            <router-link tag="li" to="/"> {{ $t('word.home') }} </router-link>
          </b-nav-item>
          <b-nav-item href="#" disabled>
            <router-link tag="li" to="/about"> {{ $t('word.contact') }}  </router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link tag="li" to="/about"> {{ $t('word.about') }}  </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="mx-auto">
          <b-nav-form>
            <b-button v-b-toggle.collapse-addobject class="mr-sm-2 blue-glow" size="sm"> + </b-button>
          </b-nav-form>
          <b-nav-form>
            <b-form-input id="navsearch" size="sm" class="mr-sm-2" v-bind:placeholder="$t('word.search') " v-model="navSearchStr"></b-form-input>
            <!-- <b-button id="navbutton" size="sm" class="my-2 my-sm-0" type="submit"> -->
            <!--   {{ $t('word.search') }}                                              -->
            <!-- </b-button>                                                            -->
          </b-nav-form>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto mr-auto">
          <b-nav-item-dropdown style="width: 150px; text-align: right">
            <!-- Using 'button-content' slot -->
            <template slot="button-content"><em> {{ $t('word.user') }} </em></template>
            <b-dropdown-item href="#"> {{ $t('word.profile') }} </b-dropdown-item>
            <b-dropdown-item href="#"> {{ $t('word.sign_out') }} </b-dropdown-item>
          </b-nav-item-dropdown>

          <div class="darkline"></div>

          <b-nav-item-dropdown style="width: 150px" v-bind:text="langSelected">
              <option v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang">
                <b-dropdown-item @click="langSelected=lang" href="#">
                  {{ lang }}
                </b-dropdown-item>
              </option>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

import debounce from 'lodash.debounce'
import { i18n } from '@/main.js';
import store from '@/store'

export default {
  name: 'Navigation',
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
  @import '@/styles/App.scss';
  @import '@/styles/General.scss';
</style>

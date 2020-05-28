<template>
  <div id="nav">
    <b-navbar id="navbar" toggleable="lg" type="dark">
      <b-navbar-brand href="#">Harmony</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link tag="li" to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item href="#" disabled>
            <router-link tag="li" to="/about">Contact</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link tag="li" to="/about">About</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
          <b-button v-b-toggle.collapse-addobject class="bg-info mr-sm-2" size="sm"> + </b-button>
          </b-nav-form>
          <b-nav-form>
            <b-form-input id="navsearch" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button id="navbutton" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
              <option v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang">
                <b-dropdown-item @click="langSelected=lang" href="#">
                  {{ lang.toUpperCase() }}
                </b-dropdown-item>
              </option>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { i18n } from "../main.js";

export default {
  name: 'Navigation',
  data() {
    return {
      langs: ['pl','en'],
      langSelected: 'pl',
    }
  },
  watch: {
    langSelected: function(value) {
      console.log("Language change to:", value)
      i18n.locale = value
    }
  },
}
</script>

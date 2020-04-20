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
            <b-form-input id="navsearch" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button id="navbutton" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">PL</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
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
export default {
  name: 'Navigation',
}
</script>

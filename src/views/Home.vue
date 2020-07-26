<template>
  <div id="home">
    <b-container fluid>
      <b-row>
        <!-- <b-col class="ml-auto mr-0" md=2> -->
        <!--   <UserSidebar />                 -->
        <!-- </b-col>                          -->

        <b-col class="mx-auto mt-2 main-backbox" md=7>
          <MainView />
        </b-col>

        <!-- <b-col class="mr-auto ml-0 pl-0" md=2> -->
        <!--   <DefinitionsSidebar />               -->
        <!-- </b-col>                               -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'
import MainView from '@/views/MainView.vue'
import ObjectDetails from '@/modals/ObjectDetails.vue'
import UserSidebar from '@/components/UserSidebar.vue'
import DefinitionsSidebar from '@/components/DefinitionsSidebar.vue'

export default {
  name: 'Home',
  components: {
    MainView,
    ObjectDetails,
    UserSidebar,
    DefinitionsSidebar,
  },
}
</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
  @import '../styles/General.scss';
  @import '../styles/App.scss';
</style>

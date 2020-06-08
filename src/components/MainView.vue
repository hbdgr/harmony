<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <ObjectDetails v-if="showDetails" />
        </b-col>
        <b-col class="main-backbox" md="5">
          <b-row>
            <!-- <AddRelation /> -->
            <AddObject />
          </b-row>
          <b-row>
            <div class="centered" key="main">
              <ObjectGraph />
            </div>
          </b-row>
        </b-col>
        <b-col>
        <DefinitionsSidebar />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { Multipane, MultipaneResizer } from 'vue-multipane'
import store from '@/store'
import AddObject from './AddObject.vue'
import AddRelation from './AddRelation.vue'
import ObjectGraph from './ObjectGraph.vue'
import ObjectDetails from './ObjectDetails.vue'
import DefinitionsSidebar from './DefinitionsSidebar.vue'

export default {
  name: 'MainView',
  components: {
    ObjectGraph,
    AddObject,
    AddRelation,
    ObjectDetails,
    Multipane,
    MultipaneResizer,
    DefinitionsSidebar,
  },
  data() {
    return {
    }
  },
  computed: {
    showDetails() {
      return this.objectSelected
    },
    objectSelected() {
      return store.getters.objectSelected
    },
  },
}
</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
</style>

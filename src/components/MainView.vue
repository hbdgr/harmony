<template>
  <div>
    <multipane class="custom-resizer" layout="vertical">
      <ObjectDetails class="pane" v-if="showDetails" />
      <multipane-resizer v-if="showDetails" />
        <div class="mainpane pane dorkbox" key="main">
          <!-- <AddRelation /> -->
          <AddObject />
          <ObjectGraph />
        </div>
      <multipane-resizer />
        <DefinitionsSidebar />
    </multipane>

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
  @import '../styles/MainPane.scss';
  @import '../styles/Boxes.scss';
</style>

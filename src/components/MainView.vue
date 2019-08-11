<template>
  <div>
    <multipane class="custom-resizer" layout="vertical">
    <ObjectDetails v-if="showDetails" class="pane"/>
    <multipane-resizer v-if="showDetails" />
      <div class="pane mainpane" key="main">
        <AddObject />
        <ObjectGraph />
      </div>
    </multipane>

  </div>
</template>

<script>
import { Multipane, MultipaneResizer } from 'vue-multipane';
import store from '@/store.js'
import ObjectGraph from './ObjectGraph.vue';
import AddObject from './AddObject.vue';
import ObjectDetails from './ObjectDetails.vue';

export default {
  name: 'MainView',
  components: {
    ObjectGraph,
    AddObject,
    ObjectDetails,
    Multipane,
    MultipaneResizer,
  },
  data() {
    return {
    };
  },
  computed: {
    showDetails() {
      return this.objectSelected;
    },
    objectSelected() {
      return store.getters.objectSelected;
    },
  },
};
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

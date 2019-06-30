<template>
  <div>
    <button @click="toggleSelected">toggle details {{ objectSelected }}</button>
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
      objectSelected: false,
    };
  },
  computed: {
    showDetails() {
      return this.objectSelected;
    }
  },
  methods: {
    toggleSelected() {
      this.objectSelected = !this.objectSelected;
    }
  },
};
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

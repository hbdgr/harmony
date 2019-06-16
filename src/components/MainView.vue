<template>
  <multipane class="custom-resizer" layout="vertical">
    <div class="pane">
    </div>
    <multipane-resizer></multipane-resizer>
    <div class="pane">
      <AddObject />
      <ObjectGraph />
    </div>
  </multipane>
</template>

<script>
import { Multipane, MultipaneResizer } from 'vue-multipane';
import ObjectGraph from './ObjectGraph.vue';
import AddObject from './AddObject.vue';

export default {
  name: 'MainView',
  components: {
    ObjectGraph,
    AddObject,
    Multipane,
    MultipaneResizer,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

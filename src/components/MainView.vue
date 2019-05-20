<template>
  <multipane class="custom-resizer" layout="vertical">
    <div class="pane">
      <AddObject />
    </div>
    <multipane-resizer></multipane-resizer>
    <div class="pane">
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
  .pane {
    width: 100%;
    height: 100%;
  }
  .custom-resizer {
    height: 700px;
  }
  .custom-resizer > .pane {
    text-align: left;
    padding: 15px;
    overflow: hidden;
    background: #eee;
    border: 1px solid #ccc;
  }
  .custom-resizer > .pane ~ .pane {
  }
  .custom-resizer > .multipane-resizer {
    margin: 0; left: 0;
    position: relative;
    &:before {
      display: block;
      content: "";
      width: 3px;
      height: 40px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -20px;
      margin-left: -1.5px;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
    &:hover {
      &:before {
        border-color: #999;
      }
    }
  }
</style>

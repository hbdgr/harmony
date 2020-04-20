<template>
  <div>
    <multipane class="custom-resizer" layout="vertical">
    <ObjectDetails class="pane" v-if="showDetails" />
    <multipane-resizer v-if="showDetails" />
      <div class="mainpane pane" key="main">
        <b-container style="border: 5">
          <b-row>
            <b-col>
              <b-button v-b-toggle.collapse-addobject variant="primary" class="add-button">
                Dodaj nowy obiekt
              </b-button>
            </b-col>
            <b-col>
              <b-button v-b-toggle.collapse-addrelation variant="primary" class="add-button">
                Dodaj nową relację
              </b-button>
            </b-col>
          </b-row>
          <b-row>
            <AddObject />
            <AddRelation />
          </b-row>
        </b-container>
        <ObjectGraph />
      </div>
    </multipane>

  </div>
</template>

<script>
import { Multipane, MultipaneResizer } from 'vue-multipane';
import store from '@/store.js'
import AddObject from './AddObject.vue';
import AddRelation from './AddRelation.vue';
import ObjectGraph from './ObjectGraph.vue';
import ObjectDetails from './ObjectDetails.vue';

export default {
  name: 'MainView',
  components: {
    ObjectGraph,
    AddObject,
    AddRelation,
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
  @import '../styles/MainPane.scss';
  @import '../styles/Boxes.scss';
</style>

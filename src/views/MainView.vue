<template>
  <div>
    <b-container fluid>
      <b-row>
        <!-- <AddRelation /> -->
        <AddObject />
      </b-row>
      <b-row>
        <div class="centered" key="main">
          <ObjectGraph />
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AddObject from '@/components/AddObject.vue'
import AddRelation from '@/components/AddRelation.vue'
import ObjectGraph from '@/components/ObjectGraph.vue'

export default {
  name: 'MainView',
  components: {
    ObjectGraph,
    AddObject,
    AddRelation,
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
</style>

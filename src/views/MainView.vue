<template>
  <div>
    <b-container>
      <b-row>
        <!-- <AddRelation /> -->
        <AddObject />
      </b-row>
      <b-row>
        <div class="centered" v-if="!objectSelected" key="main">
          <ElementStream />
        </div>
        <div class="centered" v-else>
          <ElementExpanded :elementHash="objectHash" />
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AddObject from '@/components/AddObject.vue'
// import AddRelation from '@/components/AddRelation.vue'
import ElementStream from '@/views/ElementStream.vue'
import ElementExpanded from '@/views/ElementExpanded.vue'

import store from '@/store'

export default {
  name: 'MainView',
  components: {
    ElementStream,
    ElementExpanded,
    AddObject,
    // AddRelation,
  },
  data() {
    return {
    }
  },
  computed: {
    objectSelected() {
      return store.getters['elements/objectSelected']
    },
    objectHash() {
      return store.getters['elements/hash']
    },
  },
}
</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
</style>

<template>
  <div @click="unselectObject">
    <DeleteModal :objectHash="selectedObjectHash" />
    <ObjectDetails :objectHash="selectedObjectHash" />

    <div v-if="objectsUpToDate">
      <div v-for="obj in primaryElements" :key="obj.hash" class="column">
        <SimpleObject :object="obj" />
      </div>
    </div>
  </div>
</template>

<script>
import DeleteModal from '@/modals/DeleteModal.vue'
import ObjectDetails from '@/modals/ObjectDetails.vue'
import SimpleObject from './SimpleObject.vue'

import store from '@/store'
import { mapActions } from 'vuex'

export default {
  name: 'ObjectGraph',
  components: {
    DeleteModal,
    ObjectDetails,
    SimpleObject,
  },
  data() {
    return {}
  },
  created() {
    this.updateObjects()
  },
  computed: {
    primaryElements() {
      return store.getters['elements/primaryElements']
    },
    objectsUpToDate() {
      const upToDate = store.getters['elements/objectsUpToDate']
      if (!upToDate) {
        this.updateObjects()
      }
      return upToDate
    },
    objectSelected() {
      return store.getters['elements/objectSelected']
    },
    selectedObjectHash() {
      return store.state.elements.objectHash
    },
  },
  filters: {
  },
  methods: {
    ...mapActions('elements', {
      updateObjects: 'updateObjects',
    }),

    unselectObject() {
      // should not cover objects
      // store.commit('elements/objectSelected', { selected: false })
    },
  },
}
</script>

<style lang="scss">
  @import '../styles/ObjectGraph.scss';
</style>

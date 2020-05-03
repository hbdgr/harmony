<template>
  <div class="main-darkbox" @click="unselectObject">
    <DeleteModal :objectHash="selectedObjectHash"/>
    <div v-if="objectsUpToDate">
      <div v-for="obj in primaryElements" :key="obj.hash" class="column">
        <SimpleObject :object="obj" />
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import DeleteModal from '@/modals/DeleteModal.vue'
import SimpleObject from './SimpleObject.vue'

export default {
  name: 'ObjectGraph',
  components: {
    DeleteModal,
    SimpleObject,
  },
  data() {
    return {}
  },
  created() {
    store.dispatch('updateObjects')
  },
  computed: {
    primaryElements() {
      return store.getters.primaryElements
    },
    objectsUpToDate() {
      const upToDate = store.getters.objectsUpToDate
      if (!upToDate) {
        store.dispatch('updateObjects')
      }
      return upToDate
    },
    objectSelected() {
      return store.getters.objectSelected
    },
    selectedObjectHash() {
      return store.state.objectHash
    },
  },
  filters: {
  },
  methods: {
    unselectObject() {
      // should not cover objects
      // store.commit('objectSelected', { selected: false })
    },
  },
}
</script>

<style lang="scss">
  @import '../styles/ObjectGraph.scss';
</style>

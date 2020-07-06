<template>
  <div @click="unselectObject">
    <DeleteModal :objectHash="selectedObjectHash" />
    <ObjectDetails :objectHash="selectedObjectHash" />

      <div v-if="objectsUpToDate">
        <div v-for="obj in primaryElements" :key="obj.hash">
          <SimpleElement :element="obj" />
        </div>
      </div>

  </div>
</template>

<script>
import DeleteModal from '@/modals/DeleteModal.vue'
import ObjectDetails from '@/modals/ObjectDetails.vue'
import SimpleElement from '@/components/SimpleElement.vue'

import store from '@/store'
import { mapActions } from 'vuex'

export default {
  name: 'ElementStream',
  components: {
    DeleteModal,
    ObjectDetails,
    SimpleElement,
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
    selectedObjectHash() {
      return store.state.elements.objectHash
    },
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
@import '../styles/Boxes.scss';
</style>

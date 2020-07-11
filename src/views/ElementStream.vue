<template>
  <div @click="unselectObject">
      <div v-if="objectsUpToDate">
        <div v-for="obj in primaryElements" :key="obj.hash">
          <SimpleElement :element="obj" />
        </div>
      </div>

  </div>
</template>

<script>
import SimpleElement from '@/components/SimpleElement.vue'
import ObjectDetails from '@/modals/ObjectDetails.vue'

import store from '@/store'
import { mapActions } from 'vuex'

export default {
  name: 'ElementStream',
  components: {
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
      let searchStr = store.getters['navigation/searchStr']
      let elements = store.getters['elements/primaryElements']

      if (searchStr === '') {
        return elements
      }

      searchStr = searchStr.toLowerCase()
      return elements.filter(ele =>
        (ele.content.body.toLowerCase().search(searchStr) !== -1)
      )
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

<template>
  <div @click="unselectObject">
      <div v-if="objectsUpToDate">
        <div v-for="obj in primaryElements" :key="obj.hash">
          <router-link
            :to="{name: 'element_expanded', params:{id: base64(obj.hash), elementHash: obj.hash}}">
            <SimpleElement :element="obj" />
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import { Buffer } from 'buffer'

import { mapActions } from 'vuex'
import store from '@/store'

import SimpleElement from '@/components/SimpleElement'

export default {
  name: 'ElementStream',
  components: {
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
      const elements = store.getters['elements/primaryElements']

      if (searchStr === '') {
        return elements
      }

      searchStr = searchStr.toLowerCase()
      return elements.filter(ele => (ele.content.body.toLowerCase().search(searchStr) !== -1))
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

    base64(hex) {
      return Buffer.from(hex, 'hex').toString('base64')
    },
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

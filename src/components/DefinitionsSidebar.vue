<template>
  <div class="darksidebar">
    <h5><b> {{ $t('message.defs') }} </b></h5>
    <div v-if="objectsUpToDate">
      <b-list-group>
      <div v-for="def in definitions" :key="def.hash" class="column">
        <div @click="selectObject(def.hash)">
          <b-list-group-item
            class="d-flex justify-content-between align-items-center" variant="dark"> {{ def.content.body }}
            <b-badge variant="info" pill>0</b-badge>
          </b-list-group-item>
        </div>
      </div>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'DefinitionsSidebar',
  computed: {
    definitions() {
      return store.getters.definitions
    },
    objectsUpToDate() {
      const upToDate = store.getters.objectsUpToDate
      if (!upToDate) {
        store.dispatch('updateObjects')
      }
      return upToDate
    },
  },
  methods: {
    theSameSelected(hash) {
      return store.state.objectHash === hash
    },
    saveObjectHash(hash) {
      store.commit('setObjectHash', { hash })
    },
    selectObject(hash) {
      // unselect for double clicking the same object
      if (this.theSameSelected(hash)) {
        store.commit('objectSelected', { selected: false })
        return
      }

      store.commit('objectSelected', { selected: true })
      this.saveObjectHash(hash)
    },
  },
}

</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
</style>

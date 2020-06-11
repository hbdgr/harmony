<template>
  <div class="rightside-fixedbox">
    <h5><b> {{ $t('message.defs') }} </b></h5>
    <div v-if="objectsUpToDate">
      <b-list-group>
      <div v-for="def in definitions" :key="def.hash" class="column">
        <div class="definitions-box" @click="selectObject(def.hash)">
          <b-list-group-item
            class="d-flex justify-content-between align-items-center" variant="dark">
              <div class="definition-box">
                {{ def.content.body }}
              </div>
            <b-badge class="blue-glow" pill>0</b-badge>
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
      return store.getters['elements/definitions']
    },
    objectsUpToDate() {
      const upToDate = store.getters['elements/objectsUpToDate']
      if (!upToDate) {
        store.dispatch('elements/updateObjects')
      }
      return upToDate
    },
  },
  methods: {
    theSameSelected(hash) {
      return store.state.elements.objectHash === hash
    },
    saveObjectHash(hash) {
      store.commit('elements/setObjectHash', { hash })
    },
    selectObject(hash) {
      // unselect for double clicking the same object
      if (this.theSameSelected(hash)) {
        store.commit('elements/objectSelected', { selected: false })
        return
      }

      store.commit('elements/objectSelected', { selected: true })
      this.saveObjectHash(hash)
    },
  },
}

</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
</style>

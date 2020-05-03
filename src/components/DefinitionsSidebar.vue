<template>
  <div class="darksidebar">
    <h5><b> Definicje: </b></h5>
    <div v-if="objectsUpToDate">
      <b-list-group>
      <div v-for="def in definitions" :key="def.hash" class="column">
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          variant="dark"> {{ def.content.body }}

          <b-badge variant="info" pill>0</b-badge>
        </b-list-group-item>
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
}

</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
</style>

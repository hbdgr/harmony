<template>
  <div class="box" @click="selectObject">
    <div class="box-header">
      {{ object.hash }}
    </div>

    <p class="box-content">{{ object.content.body }}</p>

    <div class="box-footer" >
      <v-icon class="info-circle" name="info-circle" scale="1.7"
        @click.stop="infoClicked" v-b-modal.object-details />

      <v-icon class="trash" name="trash" scale="1.7"
        @click.stop="trashClicked" v-b-modal.delete-modal />
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'SimpleObject',
  props: {
    object: Object,
  },
  computed: {
    theSameSelected() {
      return store.state.elements.objectHash === this.object.hash
    },
    objectType() {
      const objType = this.object.content.header.object_type
      if (objType === 'PrimaryElement') {
        return 'Primary'
      }

      if (objType.RelationDefinition != null) {
        return 'Definition'
      }

      return 'unknown'
    },
  },
  methods: {
    infoClicked() {
      this.selectObject()
    },
    trashClicked() {
      this.selectObject()
    },
    saveObjectHash() {
      store.commit('elements/setObjectHash', { hash: this.object.hash })
    },
    selectObject() {
      // unselect for double clicking the same object
      if (this.theSameSelected) {
        store.commit('elements/objectSelected', { selected: false })
        return
      }

      store.commit('elements/objectSelected', { selected: true })
      this.saveObjectHash()
    },
  },
}
</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
  @import '../styles/General.scss';
</style>

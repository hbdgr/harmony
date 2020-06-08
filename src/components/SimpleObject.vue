<template>
  <div class="box" @click="selectObject">
    <div class="box-header">
      {{ object.hash }}
    </div>

    <p class="box-content">{{ object.content.body }}</p>

    <div class="box-footer" >
      <button class="box-trash" @click.stop="trashClicked" v-b-modal.delete-modal>
        <v-icon class="trash" name="trash" scale="0.9" />
      </button>
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
      return store.state.objectHash === this.object.hash
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
    trashClicked() {
      this.saveObjectHash()
    },
    saveObjectHash() {
      store.commit('setObjectHash', { hash: this.object.hash })
    },
    selectObject() {
      // unselect for double clicking the same object
      if (this.theSameSelected) {
        store.commit('objectSelected', { selected: false })
        return
      }

      store.commit('objectSelected', { selected: true })
      this.saveObjectHash()
    },
  },
}
</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
</style>

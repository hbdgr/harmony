<template>
  <p class="box-content" @click="selectElement">{{ element.content.body }}</p>
</template>

<script>
import store from '@/store'

export default {
  name: 'SimpleElement',
  props: {
    element: Object,
  },
  computed: {
    theSameSelected() {
      return store.state.elements.objectHash === this.element.hash
    },
    objectType() {
      const objType = this.element.content.header.object_type
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
      this.selectElement()
    },
    trashClicked() {
      this.selectElement()
    },
    saveObjectHash() {
      store.commit('elements/setObjectHash', { hash: this.element.hash })
    },
    selectElement() {
      // unselect for double clicking the same element
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

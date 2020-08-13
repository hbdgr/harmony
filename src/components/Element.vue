<template>
  <div class="box">
    <div class="box-header">
      {{ shortenHah }}
    </div>

    <p class="box-content">{{ element.content.body }}</p>

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
    shortenHah() {
      const { hash } = this.element
      if (window.innerWidth >= 955) {
        return hash
      }

      let partSize = 24
      if (window.innerWidth <= 450) {
        partSize = 10
      }

      let shorten = hash.substr(0, partSize)
      shorten += '...'
      shorten += hash.substr(hash.length - partSize)

      return shorten
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
  @import '@/styles/Boxes.scss';
  @import '@/styles/Icons.scss';
</style>

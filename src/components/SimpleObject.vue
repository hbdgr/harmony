<template>
  <div class="boxed" @click="selectObject">
    <div class="boxedIdx">
      {{ object.hash }}
    </div>
    <button class="trashBox" @click.stop="trashClicked" v-b-modal.delete-modal>
      <v-icon class="trash" name="trash" scale="0.9" />
    </button>
    <p class="contentText">{{ object.content.body }}</p>
  </div>
</template>

<script>
import store from '@/store.js'

export default {
  name: 'SimpleObject',
  props: {
    object: Object,
  },
  computed: {
    selected() {
      return store.getters.objectSelected;
    },
    theSameObjectSelected() {
      if (!this.selected) {
        return false
      }
      return store.state.objectHash === this.object.hash;
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
      if (this.theSameObjectSelected) {
        store.commit('objectSelected', { selected: false })
        return
      }

      store.commit('objectSelected', { selected: true })
      this.saveObjectHash()
    }
  },
};
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

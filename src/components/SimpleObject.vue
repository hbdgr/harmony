<template>
  <div class="boxed" @click="selectObject">
    <div class="boxedIdx">
      {{ object.id }}
    </div>
    <button class="trashBox" @click.stop="trashClicked" v-b-modal.delete-modal>
      <v-icon class="trash" name="trash" scale="0.9" />
    </button>
    <p class="contentText">{{ object.content }}</p>
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
      return store.state.objectId === this.object.id;
    },
  },
  methods: {
    trashClicked() {
      this.saveObjectId()
      console.log("trash hello")
    },
    saveObjectId() {
      store.commit('setObjectId', { id: this.object.id })
    },
    selectObject() {
      // unselect for double clicking the same object
      if (this.theSameObjectSelected) {
        store.commit('objectSelected', { selected: false })
        return
      }

      store.commit('objectSelected', { selected: true })
      this.saveObjectId()
    console.log("select obj hello")
    }
  },
};
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

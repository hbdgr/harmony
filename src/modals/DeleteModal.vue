<template>
  <b-modal id=delete-modal size="sm" :hide-header-close=true centered title="DELETE ME?" @ok="deleteOk" no-stacking>
    Are you sure, you want to delete this element (hash={{objectHash}})?
  </b-modal>
</template>

<script>
import store from '@/store.js'

export default {
  name: 'DeleteModal',
  props: {
    objectHash: String,
  },
  data() {
    return {};
  },
  methods: {
    deleteOk() {
      store.dispatch('deleteObject', { objectHash: this.objectHash })
      store.commit('objectSelected', { selected: false })
    },
  },
};
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

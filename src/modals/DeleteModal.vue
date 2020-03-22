<template>
  <b-modal id=delete-modal size="lg" :hide-header-close=true centered title="USUŃ MNIE" @ok="deleteOk" no-stacking>
    Czy jesteś pewien, że chcesz usunąć ten obiekt? (hash={{objectHash}})
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

<template>
  <b-modal id=delete-modal size="sm" :hide-header-close=true centered title="DELETE ME?" @ok="deleteOk" no-stacking>
    Are you sure, you want to delete this element (id={{objectId}})?
  </b-modal>
</template>

<script>
import store from '@/store.js'

export default {
  name: 'DeleteModal',
  props: {
    objectId: Number,
  },
  data() {
    return {};
  },
  methods: {
    deleteOk() {
      store.dispatch('deleteObject', { objectId: this.objectId })
    },
  },
};
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

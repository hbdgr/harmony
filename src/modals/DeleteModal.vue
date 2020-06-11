<template>
  <b-modal id=delete-modal size="lg" :hide-header-close=true
    centered :title="$t('title.delete_me')" @ok="deleteOk" no-stacking>
    {{ $t('message.delete_object') }} (hash={{objectHash}})
  </b-modal>
</template>

<script>
import store from '@/store'

export default {
  name: 'DeleteModal',
  props: {
    objectHash: String,
  },
  data() {
    return {}
  },
  methods: {
    deleteOk() {
      store.dispatch('elements/deleteObject', { objectHash: this.objectHash })
      store.commit('elements/objectSelected', { selected: false })
    },
  },
}
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

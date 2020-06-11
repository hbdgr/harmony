<template>
  <b-modal id=object-details class="object-details-box" size="lg"
    :hide-header-close=true
    centered :title="$t('message.object_details')+':'"
    @ok="close" @hidden="close"
    no-stacking ok-only >
    <h6> Hash: </h6>
      {{ objectHash }}
    <hr>
    <h6> {{ $t('word.type')}}: </h6>
    <p>
      {{ objectType() }}
    </p>
    <hr>
    <h6> {{ $t('word.content') }}: </h6>
    <p>
      {{ objectContent() }}
    </p>
  </b-modal>
</template>

<script>
import store from '@/store'
import get from 'lodash.get'

export default {
  name: 'ObjectDetails',
  props: {
    objectHash: String,
  },
  data() {
    return {
    }
  },
  computed: {
   selectedObject() {
     return store.getters['elements/objectByHash'](this.objectHash)
   },
  },
  methods: {
    objectType() {
      let header = get(this.selectedObject, "content.header.object_type")
      if (header === undefined) {
        return ""
      }

      return header
    },
    objectContent() {
      let content = get(this.selectedObject, "content.body")
      if (content === undefined) {
        return ""
      }

      return content
    },
    close() {
      store.commit('elements/objectSelected', { selected: false })
    },
  },
}
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

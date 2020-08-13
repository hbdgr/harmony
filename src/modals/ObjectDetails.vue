<template>
  <b-modal id="object-details" size="sm"
    :hide-header-close=true
    centered :title="$t('message.object_details')+':'"
    @ok="close" @hidden="close"
    no-stacking ok-only >
    <div class="object-details-box">
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
    </div>
  </b-modal>
</template>

<script>
import get from 'lodash.get'
import store from '@/store'

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
      return store.getters['elements/byHash'](this.objectHash)
    },
  },
  methods: {
    objectType() {
      const header = get(this.selectedObject, 'content.header.object_type')
      if (header === undefined) {
        return ''
      }

      return header
    },
    objectContent() {
      const content = get(this.selectedObject, 'content.body')
      if (content === undefined) {
        return ''
      }

      return content
    },
    close() {
    },
  },
}
</script>

<style lang="scss">
  @import '@/styles/Boxes.scss';
</style>

<template>
  <div>
    <DeleteModal :objectHash="elementHash" />
    <ObjectDetails :objectHash="elementHash" />

    <hr style="margin: 2px auto 5px auto">

    <div class="close-box">
      <v-icon class="close" name="regular/window-close" scale="1.9"
        @click.native="closeClicked" />
    </div>

    <hr style="margin: 5px auto 5px auto">

    <Origin :childHash="elementHash" />
    <hr style="margin: 2px">

    <Element :element="element" />
    <hr style="margin: 2px">

    <Comments :parentHash="elementHash" />

  </div>
</template>

<script>
import Element from '@/components/Element'
import Origin from '@/components/Origin'
import Comments from '@/components/Comments'

import DeleteModal from '@/modals/DeleteModal.vue'
import ObjectDetails from '@/modals/ObjectDetails.vue'

import store from '@/store'

export default {
  name: 'ElementExpanded',
  components: {
    DeleteModal,
    ObjectDetails,
    Element,
    Origin,
    Comments,
  },
  props: {
    elementHash: String,
  },
  computed: {
    element() {
      return store.getters['elements/byHash'](this.elementHash)
    }
  },
  methods: {
    closeClicked() {
      store.commit('elements/objectSelected', { selected: false })
    },
  },
}
</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
  @import '../styles/Icons.scss';
</style>

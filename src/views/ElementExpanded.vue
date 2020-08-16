<template>
  <div>
    <DeleteModal :objectHash="hash" />
    <ObjectDetails :objectHash="hash" />

    <hr style="margin: 2px auto 5px auto">

    <div class="close-box">
      <router-link to="/">
        <v-icon class="close" name="regular/window-close" scale="1.9"
          @click.native="closeClicked" />
      </router-link>
    </div>

    <hr style="margin: 5px auto 5px auto">

    <Origin :childHash="hash" />
    <hr style="margin: 2px">

    <Element v-if="objectsUpToDate" :element="element" />
    <hr style="margin: 2px">

    <Comments :parentHash="hash" />

  </div>
</template>

<script>
import Element from '@/components/Element'
import Origin from '@/components/Origin'
import Comments from '@/components/Comments'

import DeleteModal from '@/modals/DeleteModal'
import ObjectDetails from '@/modals/ObjectDetails'

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
    objectsUpToDate() {
      const upToDate = store.getters['elements/objectsUpToDate']
      if (!upToDate) {
        store.dispatch('elements/updateObjects')
      }
      return upToDate
    },
    element() {
      if (this.elementHash !== undefined) {
        return store.getters['elements/byHash'](this.elementHash)
      }
      return store.getters['elements/byHash'](this.hash)
    },
    hash() {
      return this.$route.params.id
    },
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

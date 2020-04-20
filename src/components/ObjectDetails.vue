<template>
  <div>
    <button class="closeBox" @click="close">
      <v-icon class="close" name="regular/window-close" scale="1.9"/>
    </button>
    <div class="object-details">
      <h5> Hash: {{ selectedObjectHash }} </h5>
      <hr>
      <h5>Title:</h5>
      <p>
        {{ selectedObject.content.header }}
      </p>
      <hr>
      <h5>Content:</h5>
      <p>
        {{ selectedObject.content.body }}
      </p>
    </div>
    <hr>
    <b-button variant="danger" v-b-modal.delete-modal style="float: right">Delete</b-button>
  </div>
</template>

<script>
// import { MultipaneResizer } from 'vue-multipane'
import store from '@/store'

export default {
  name: 'ObjectDetails',
  components: {
  // MultipaneResizer,
  },
  data() {
    return {
    }
  },
  computed: {
    selectedObjectHash() {
      return store.state.objectHash
    },
    selectedObject() {
      return store.getters.objectByHash(this.selectedObjectHash)
    },
  },
  methods: {
    close() {
      store.commit('objectSelected', { selected: false })
    },
  },
}
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

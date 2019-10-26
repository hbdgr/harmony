<template>
  <div>
    <button class="closeBox" @click="close">
      <v-icon class="close" name="regular/window-close" scale="1.9"/>
    </button>
    <div class="object-details">
      <h4> ID: {{ selectedObject.id }} </h4>
      <hr>
      <h4>Title:</h4>
      <p>
        {{ selectedObject.header }}
      </p>
      <hr>
      <h4>Content:</h4>
      <p>
        {{ selectedObject.body }}
      </p>
    </div>
    <hr>
    <b-button variant="danger" v-b-modal.delete-modal style="float: right">Delete</b-button>
  </div>
</template>

<script>
import { MultipaneResizer } from 'vue-multipane';
import store from '@/store.js'

export default {
  name: 'ObjectDetails',
  components: {
    MultipaneResizer,
  },
  data() {
    return {
    };
  },
  computed: {
    selectedObjectId() {
      return store.state.objectId;
    },
    selectedObject() {
      return store.getters.objectById(this.selectedObjectId)
    },
  },
  methods: {
    close() {
      store.commit('objectSelected', { selected: false })
    },
  },
};
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

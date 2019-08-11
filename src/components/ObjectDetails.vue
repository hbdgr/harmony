<template>
  <div>
    Selected object details: {{ selectedObjectId }}
    <button class="closeBox" @click="close">
      <v-icon class="close" name="regular/window-close" scale="1.9"/>
    </button>
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

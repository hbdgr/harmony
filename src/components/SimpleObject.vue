<template>
  <div class="boxed">
    <div class="boxedIdx">
      {{ object.id }}
    </div>
    <b-button class="trashBox" @click="saveObjectId" v-b-modal.delete-modal>
      <v-icon class="trash" name="trash" scale="0.9" />
    </b-button>
    <p class="contentText">{{ object.content }}</p>
  </div>
</template>

<script>
import store from '@/store.js'

export default {
  name: 'SimpleObject',
  props: {
    object: Object,
  },
  methods: {
    saveObjectId() {
      store.commit('setObjectId', { id: this.object.id })
    }
  },
};
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

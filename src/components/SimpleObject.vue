<template>
  <div class="boxed">
    <div class="boxedIdx">
      {{ object.id }}
    </div>
      <b-button class="trashBox" v-b-modal.delete-modal>
        <v-icon class="trash" name="trash" scale="0.9" />
      </b-button>
    <p class="contentText">{{ object.content }}</p>
  </div>
</template>

<script>

export default {
  name: 'SimpleObject',
  props: {
    object: Object,
  },
};
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

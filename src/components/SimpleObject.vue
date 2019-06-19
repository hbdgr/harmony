<template>
  <div id="boxed">
    <div id="boxedIdx">
      {{ object.id }}
    </div>
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

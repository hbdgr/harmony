<template>
  <p class="box-simple-content">{{ element.content.body }}</p>
</template>

<script>
export default {
  name: 'SimpleElement',
  props: {
    element: Object,
  },
}
</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
  @import '../styles/General.scss';
</style>

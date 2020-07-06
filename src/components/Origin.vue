<template>
  <div class="box-simple-content">
    ORIGIN / SOURCES BOX
    <br>
    childHash {{ childHash }}
  </div>
</template>

<script>
export default {
  name: 'Origin',
  props: {
    childHash: String,
  },
}
</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
</style>

<template>
  <div class="box-simple-content">
    COMMENTS / REVIEW BOX
    <br>
    parentHash {{ parentHash }}
  </div>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    parentHash: String,
  },
}
</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
</style>

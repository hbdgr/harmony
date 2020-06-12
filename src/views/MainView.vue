<template>
  <div>
    <b-container fluid>
      <b-row>
        <!-- <AddRelation /> -->
        <AddObject />
      </b-row>
      <b-row>
        <div class="centered" key="main">
          <ElementStream />
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AddObject from '@/components/AddObject.vue'
import AddRelation from '@/components/AddRelation.vue'
import ElementStream from '@/views/ElementStream.vue'

export default {
  name: 'MainView',
  components: {
    ElementStream,
    AddObject,
    AddRelation,
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
</style>

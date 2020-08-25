<template>
  <div>
    <b-container>
      <b-row>
        <!-- <AddRelation /> -->
        <!-- <AddObject /> -->
      </b-row>
      <b-row>
        <div class="centered">
          <router-view />
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import AddObject from '@/components/AddObject'
// import AddRelation from '@/components/AddRelation.vue'

import store from '@/store'

export default {
  name: 'MainView',
  components: {
    // AddObject,
    // AddRelation,
  },
  data() {
    return {
    }
  },
  computed: {
    objectSelected() {
      return store.getters['elements/objectSelected']
    },
    objectHash() {
      return store.getters['elements/hash']
    },
  },
}
</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
</style>

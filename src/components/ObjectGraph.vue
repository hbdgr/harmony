<template>
  <div class="object_graph">

    <DeleteModal :objectId="selectedObjectId"/>
               <!-- Selected: {{ objectSelected }} -->
    <div @click="unselectObject" class="darkbox objectsbox">
      <div v-if="objectsUpToDate">
        <div v-for="obj in objects" :key="obj.id" class="column">
          <SimpleObject :object="obj" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store.js'
import DeleteModal from '@/modals/DeleteModal.vue';
import SimpleObject from './SimpleObject.vue';

export default {
  name: 'ObjectGraph',
  components: {
    DeleteModal,
    SimpleObject,
  },
  data() {
    return {};
  },
  created() {
    store.dispatch('updateObjects');
  },
  computed: {
    objects() {
      return store.getters.objects;
    },
    objectsUpToDate() {
      let upToDate = store.getters.objectsUpToDate;
      if (!upToDate) {
        store.dispatch('updateObjects');
      }
      return upToDate;
    },
    objectSelected() {
      return store.getters.objectSelected;
    },
    selectedObjectId() {
      return store.state.objectId;
    },
  },
  filters: {
  },
  methods: {
    unselectObject() {
      // should not cover objects
      // store.commit('objectSelected', { selected: false })
    },
  },
};
</script>

<style lang="scss">
  @import '../styles/ObjectGraph.scss';
</style>

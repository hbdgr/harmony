<template>
  <div class="object_graph">

    <DeleteModal :objectId="selectedObjectId"/>

    <div class="darkbox objectsbox">
      <button @click="getObjects">Show <i>All</i> Objects</button>
      <div v-if="objects.length">
        <div v-for="obj in objects" :key="obj.id" class="column">
          <SimpleObject :object="obj" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store.js'
import DataApi from '@/services/DataApi';
import DeleteModal from '@/modals/DeleteModal.vue';
import SimpleObject from './SimpleObject.vue';

export default {
  name: 'ObjectGraph',
  components: {
    DeleteModal,
    SimpleObject,
  },
  data() {
    return {
      entry: '',
      entries: [],
      objects: [],
    };
  },
  computed: {
    filteredEntries() {
      const bad = ['bad', 'weak', 'boring'];
      return this.entries.filter(entry => bad.indexOf(entry.toLowerCase()) === -1);
    },
    selectedObjectId() {
      return store.state.objectId;
    },
  },
  filters: {
    shout(value) {
      return `They said "${value}"!`;
    },
  },
  methods: {
    addEntry() {
      this.entries.push(this.entry);
      this.entry = '';
    },
    async getObjects() {
      const objects = await DataApi.getAll();
      console.log(objects);
      this.objects = objects.data;
    },
  },
};
</script>

<style lang="scss">
  @import '../styles/ObjectGraph.scss';
</style>

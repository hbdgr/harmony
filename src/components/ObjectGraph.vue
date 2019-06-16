<template>
  <div class="object_graph">
    <div id="darkbox">
      <button @click="getObjects">Show All Objects</button>
      <div v-if="objects.length">
        <div v-for="obj in objects" :key="obj.id" class="column">
          <SimpleObject :object="obj" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataApi from '@/services/DataApi';
import SimpleObject from './SimpleObject.vue';

export default {
  name: 'ObjectGraph',
  components: {
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

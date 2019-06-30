<template>
  <div class="mainview">
    <div class="darkbox">
      Object creation, write contenet and press enter
      <br>
      <input v-model="content" @keyup.enter="addObject">
      <br>
      <button @click="addObject">Add</button>
    </div>
  </div>
</template>

<script>
import DataApi from '@/services/DataApi';

export default {
  name: 'AddObject',
  data() {
    return {
      content: '',
    };
  },
  methods: {
    addObject() {
      console.log('Inserting:', this.content);
      DataApi.post(this.content);
      this.content = '';
    },
  },
};
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

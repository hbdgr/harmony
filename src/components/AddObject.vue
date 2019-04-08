<template>
  <div class="mainview">
    <div id="darkbox">
      Object creation, write contenet and press enter
      <br>
      <input v-model="content" @keyup.enter="addObject">
      <button id="btn" @click="addObject">Add</button>
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
}
</script>

<style scoped>
#darkbox {
  padding: 10px;
  position: relative;
  width: 30%;
  margin: 20px auto 20px auto;

  color: white;
  font-family: verdana;
  font-size: 16px;

  background-color: hsl(0, 0%, 20%);
}
#btn {
  margin: 10px;
}
</style>

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
import store from '@/store.js'

export default {
  name: 'AddObject',
  data() {
    return {
      content: '',
    };
  },
  methods: {
    addObject() {
      if (this.content.length == 0) {
        console.log("Trying to add empty obiect")
        return
      }

      store.dispatch('addObject', {content: this.content});
      this.content = '';
    },
  },
};
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

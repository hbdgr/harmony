<template>
  <div class="darkbox">
    <b-container fluid style="max-width: 900px">
      <b-row>
        <b-col>
          <b-form-input v-model="content" @keyup.enter="addObject" placeholder="Write content" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button class="add-button" @click="addObject" variant="secondary" style="float: left">Add</b-button>
        </b-col>
        <b-col>
          <b-button class="add-button" @click="clear" variant="info" style="float: right">Clear</b-button>
        </b-col>
      </b-row>
    </b-container>
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
    clear() {
      this.content = ""
    },
  },
};
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

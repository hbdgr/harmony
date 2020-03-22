<template>
  <div class="darkbox">
    <b-button v-b-toggle.collapse-addobject variant="primary" class="add-object-button">Dodaj nowy obiekt</b-button>
    <b-collapse id="collapse-addobject" class="mt-2">
      <b-container fluid style="max-width: 900px">
        <b-row>
          <b-col>
            <b-form-input v-model="content" @keyup.enter="addObject" placeholder="Napisz..." />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button class="add-button" v-b-toggle="'collapse-addobject'" @click="addObject" variant="secondary" style="float: left">Dodaj</b-button>
          </b-col>
          <b-col>
            <b-button class="add-button" @click="clear" variant="info" style="float: right">Wyczyść</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-collapse>
  </div>
</template>

<script>
import store from '@/store.js'
// https://github.com/F-loat/vue-simplemde

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

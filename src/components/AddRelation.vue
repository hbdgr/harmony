<template>
  <div class="whitebox">
    <ErrorModal :error="storeError" v-on:closed="storeError = ''"/>

    <b-collapse id="collapse-addrelation" class="mt-2 collapsebox">
      <b-container fluid style="max-width: 900px">
        <b-row>
          <!-- <b-col> -->
          <!--   <b-form-input v-model="relation_definition"
            @keyup.enter="addObject" placeholder="Definicja relacji..." /> -->
          <!-- </b-col> -->
          <!-- <b-col> -->
          <!--   <b-form-input v-model="object1" @keyup.enter="addObject" placeholder="Objekt pierwszy..." /> -->
          <!-- </b-col> -->
          <!-- <b-col> -->
          <!--   <b-form-input v-model="object2" @keyup.enter="addObject" placeholder="Objekt drugi..." /> -->
          <!-- </b-col> -->
        </b-row>
        <b-row>
          <b-col>
            <b-button class="add-button" v-b-toggle="'collapse-addrelation'"
              @click="addRelation" variant="secondary" style="float: left">
              Dodaj
            </b-button>
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
import ErrorModal from '@/modals/ErrorModal.vue'
import store from '@/store'
// https://github.com/F-loat/vue-simplemde

export default {
  name: 'AddRelation',
  components: {
    ErrorModal,
  },
  data() {
    return {
      content: '',
      storeError: '',
    }
  },
  methods: {
    addRelation() {
      if (this.content.length === 0) {
        console.log('Trying to add empty obiect')
        return
      }

      store.dispatch('addRelation', { content: this.content }).then((res) => {
        console.log('Got object data:', res)
      }, (err) => {
        this.storeError = err.message
      })
      this.content = ''
    },
    clear() {
      this.content = ''
    },
  },
}
</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
</style>

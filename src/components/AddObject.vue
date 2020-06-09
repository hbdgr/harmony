<template>
    <b-collapse id="collapse-addobject" class="mt-2 addobject-box">
      <ErrorModal :error="storeError" v-on:closed="storeError = ''"/>
      <b-container fluid>
        <b-row>
          <b-form-group label-size="lg" label="Typ obiektu:">
            <b-form-radio v-model="objectType" name="objType" value="PrimaryElement" default>
              Objekt Elementarny
            </b-form-radio>

            <b-form-radio v-model="objectType" name="objType" value="RelationDefinition">
              Definicja Relacji
            </b-form-radio>

            <b-form-checkbox
              id="directed-check"
              v-model="directed"
              name="directed-check"
              value="directed"
              style="margin-left: 25px"
              unchecked-value="not_directed"
              v-if="objectType === 'RelationDefinition'"
            >
              relacja skierowana
            </b-form-checkbox>

          </b-form-group>

        </b-row>
        <b-row>
          <b-col>
            <b-form-input v-model="content" @keyup.enter="addObject" placeholder="Napisz..." />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button class="add-button blue-glow" v-b-toggle="'collapse-addobject'"
              @click="addObject" style="float: left">
              Dodaj
            </b-button>
          </b-col>
          <b-col>
            <b-button class="add-button" @click="clear" variant="secondary" style="float: right">Wyczyść</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-collapse>
</template>

<script>
import ErrorModal from '@/modals/ErrorModal.vue'
import store from '@/store'
// https://github.com/F-loat/vue-simplemde

export default {
  name: 'AddObject',
  components: {
    ErrorModal,
  },
  data() {
    return {
      objectType: 'PrimaryElement',
      content: '',
      storeError: '',
      directed: '',
    }
  },
  methods: {
    addObject() {
      if (this.content.length === 0) {
        console.log('Trying to add empty obiect')
        return
      }

      if (!['PrimaryElement', 'RelationDefinition'].includes(this.objectType)) {
        this.storeError = 'Niezdefiniowany typ obiektu'
        return
      }

      store.dispatch('addObject', { objectType: this.objectType, content: this.content }).then((res) => {
        console.log('Got object data:', res)
      }, (err) => {
        this.storeError = err.message
      })
      this.content = ''
    },
    clear() {
      this.content = ''
      this.objectType = 'PrimaryElement'
    },
  },
}
</script>

<style lang="scss">
  @import '../styles/Boxes.scss';
</style>

<template>
    <b-collapse id="collapse-addobject" class="addobject-box">
      <ErrorModal :error="storeError" v-on:closed="storeError = ''"/>
      <b-container fluid>
        <b-row>
          <b-col>
            <b-form-input style="margin: 0  0 10px 0" v-model="content"
              @keyup.enter="addObject" v-bind:placeholder="$t('word.write')+'...'" />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button class="add-button blue-glow btn-sm" v-b-toggle="'collapse-addobject'"
              @click="addObject" style="float: left">
              {{ $t('word.add') }}
            </b-button>
          </b-col>
          <b-col>
            <b-button class="add-button btn-sm" @click="clear" variant="secondary" style="float: right">
              {{ $t('word.clear') }}
            </b-button>
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

      store.dispatch('elements/addObject', { objectType: this.objectType, content: this.content }).then((res) => {
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

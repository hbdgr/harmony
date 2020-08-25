<template>
  <b-modal id=addobject-modal class="rounded-0" size="lg" no-stacking
    header-class="addobject-modal-header"
    body-class="addobject-modal-body border-transparent"
    footer-class="addobject-modal-footer border-white"
    >
    <ErrorModal :error="storeError" v-on:closed="storeError = ''"/>

    <template v-slot:modal-header="{ close }">
      <v-icon class="addobject-close" name="regular/window-close" scale="1.9" @click="close()" />
    </template>

    <b-form-textarea
      rows="3"
      max-rows="6"
      v-model="content"
      v-bind:placeholder="$t('word.write')+'...'"
    ></b-form-textarea>

    <template v-slot:modal-footer="{ ok, cancel }">
      <b-button size="md" style="width:100%" @click="addObject()">
        {{ $t('word.add') }}
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import ErrorModal from '@/modals/ErrorModal'
import store from '@/store'
// https://github.com/F-loat/vue-simplemde

export default {
  name: 'AddObjectModal',
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
    // close() {
    //   this.clear()
    // },
  },
}
</script>

<style lang="scss">
  @import '@/styles/Boxes.scss';
  @import '@/styles/Modals.scss';
</style>

<template>
  <b-modal v-model="modalShow"
     size="lg" :hide-header-close=true :ok-only=true :no-close-on-esc=true
     centered title="ERROR" @ok="Ok" no-stacking>
    {{error}}
  </b-modal>
</template>

<script>

export default {
  name: 'ErrorModal',
  props: {
    error: String,
  },
  data() {
    return {
      modalShow: false,
    }
  },
  methods: {
    Ok() {
      this.$emit('closed')
    },
  },
  watch: {
    error(val) {
      if (val !== '') {
        this.modalShow = true
      }
    },
  },
}
</script>

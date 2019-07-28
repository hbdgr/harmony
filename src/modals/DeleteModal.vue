<template>
  <b-modal id=delete-modal size="sm" hide-header-close="true" centered title="DELETE ME?" @ok="deleteOk" no-stacking>
    Are you sure, you want to delete this element (id={{objectId}})?
  </b-modal>
</template>

<script>
import DataApi from '@/services/DataApi';

export default {
  name: 'DeleteModal',
  props: {
    objectId: Number,
  },
  data() {
    return {
    };
  },
  methods: {
    deleteOk() {
      let id = this.objectId;
      DataApi.deleteId(id)
        .then(() => {
          console.log(`Delete object, id: ${id}`)
        })
        .catch(err => {
          console.log(`Failed to delete object: ${err}`)
        });
    }
  },
};
</script>

<style lang="scss">
  @import '../styles/General.scss';
</style>

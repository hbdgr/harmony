import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    objectId: -1
  },
  mutations: {
    setObjectId (state, payload) {
      state.objectId = payload.id;
    }
  },
  actions: {

  },
});

import Vue from 'vue';
import Vuex from 'vuex';

import DataApi from '@/services/DataApi';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selected: false,
    objectsUpdToDate: false,
    objects: [],
    objectId: -1,
  },
  mutations: {
    objectSelected(state, payload) {
      state.selected = payload.selected;
    },
    setObjectId(state, payload) {
      state.objectId = payload.id;
    },
    setObjects (state,objects) {
      state.objects = objects;
    },
    objectsUpdToDate(state, payload) {
      state.objectsUpdToDate = payload.objectsUpdToDate;
    },
    deleteObject(state, payload) {
      state.objects = state.objects.filter(obj => obj.id != payload.objectId);
    },
  },
  getters: {
    objectSelected(state) {
      return state.selected;
    },
    objectsUpToDate(state) {
      return state.objectsUpdToDate;
    },
    objects(state) {
      return state.objects;
    },
    objectById: state => id => {
      return state.objects.find(obj => obj.id === id)
    },
  },
  actions: {
    async updateObjects({ commit, state }) {
      if (!state.objectsUpdToDate) {
        const objects = await DataApi.getAll();
        console.log(objects); // dbg

        commit('objectsUpdToDate', { objectsUpdToDate: true});
        commit('setObjects', objects.data)
      }
    },
    deleteObject ({commit, state}, payload) {
      let id = payload.objectId;
      DataApi.deleteId(id)
        .then((state) => {
          console.log(`Delete object, id: ${id}`);
          commit('deleteObject', payload);
        })
        .catch(err => {
          console.log(`Failed to delete object: ${err}`);
        });
    },
    addObject({commit, state}, payload) {
      let content = payload.content;
      DataApi.post(content)
        .then((state) => {
          console.log(`Add object, content: ${content}`);
          commit('objectsUpdToDate', { objectsUpdToDate: false});
        })
        .catch(err => {
          console.log(`Failed to add object: ${err}`);
        });
    },
  },
});

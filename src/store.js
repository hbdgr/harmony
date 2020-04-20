import Vue from 'vue';
import Vuex from 'vuex';

import DataApi from '@/services/DataApi';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selected: false,
    objectsUpToDate: false,
    objects: [],
    objectHash: "",
  },
  mutations: {
    objectSelected(state, payload) {
      state.selected = payload.selected;
    },
    setObjectHash(state, payload) {
      console.log("[store] setObjectHash, payload: ", payload)
      state.objectHash = payload.hash;
    },
    setObjects (state,objects) {
      state.objects = objects;
    },
    objectsUpToDate(state, payload) {
      console.log("[store] objectsUpToDate, payload: ", payload)
      state.objectsUpToDate = payload.objectsUpToDate;
    },
    deleteObject(state, payload) {
      console.log("[store] deleteObject, payload: ", payload)
      state.objects = state.objects.filter(obj => obj.hash != payload.objectHash);
    },
  },
  getters: {
    objectSelected(state) {
      return state.selected;
    },
    objectsUpToDate(state) {
      return state.objectsUpToDate;
    },
    objects(state) {
      return state.objects;
    },
    objectByHash: state => hash => {
      return state.objects.find(obj => obj.hash === hash)
    },
  },
  actions: {
    async updateObjects({ commit, state }) {
      if (!state.objectsUpToDate) {
        const objects = await DataApi.getAll();
        console.log(objects.data); // dbg

        commit('objectsUpToDate', { objectsUpToDate: true});
        commit('setObjects', objects.data)
      }
    },
    deleteObject ({commit, state}, payload) {
      let hash = payload.objectHash;
      DataApi.deleteHash(hash)
        .then((state) => {
          console.log(`[store] deleteObject, hash: ${hash}`);
          commit('deleteObject', payload);
        })
        .catch(err => {
          console.log(`[store] Failed to delete object: ${err}`);
        });
    },
    addObject({commit, state}, payload) {
      let content = payload.content;
      let objectType = payload.objectType;

      return new Promise((resolve, reject) => {
        DataApi.post(objectType, content)
          .then((state) => {
            console.log('1')
            console.log(`[store] addObject, content: ${content}`);
            commit('objectsUpToDate', { objectsUpToDate: false});
            console.log('2')
            resolve();
          })
          .catch(err => {
            console.log(`[store] Failed to add object: ${err}`);
            reject(err);
          });
      });
    },
    addRelation({commit, state}, payload) {
    },
  },
});

import DataApi from '@/services/DataApi'

export const elements = {
  namespaced: true,

  state: () => ({
    selected: false,
    objectsUpToDate: false,
    objects: [],
    objectHash: '',
  }),

  mutations: {
    objectSelected(state, payload) {
      if (payload.selected === false) {
        state.objectHash = ''
      }
      state.selected = payload.selected
    },
    setObjectHash(state, payload) {
      console.log('[store] setObjectHash, payload: ', payload)
      state.objectHash = payload.hash
    },
    setObjects(state, objects) {
      state.objects = objects
    },
    objectsUpToDate(state, payload) {
      console.log('[store] objectsUpToDate, payload: ', payload)
      state.objectsUpToDate = payload.objectsUpToDate
    },
    deleteObject(state, payload) {
      console.log('[store] deleteObject, payload: ', payload)
      state.objects = state.objects.filter(obj => obj.hash !== payload.objectHash)
    },
  },

  getters: {
    objectSelected(state) {
      return state.selected
    },
    objectsUpToDate(state) {
      return state.objectsUpToDate
    },
    objects(state) {
      return state.objects
    },
    primaryElements(state) {
      return state.objects.filter(obj => (obj.content.header.object_type) === 'PrimaryElement')
    },
    definitions(state) {
      return state.objects.filter(obj => Object.keys(obj.content.header.object_type)[0] === 'RelationDefinition')
    },
    hash(state) {
      let h = state.objectHash
      if (h === undefined) {
        if (state.selected == false) {
          console.log('[store] hash, trying to get hash, of unselected element')
        } else {
          console.log('[store] hash, Error: trying to get hash, but undefined!')
        }
      }

      return h
    },
    byHash: (state) => (hash) => {
      return state.objects.find(obj => obj.hash === hash)
    }
  },

  actions: {
    async updateObjects({ commit, state }) {
      if (!state.objectsUpToDate) {
        const objects = await DataApi.getAll()
        console.log(objects.data) // dbg

        commit('objectsUpToDate', { objectsUpToDate: true })
        commit('setObjects', objects.data)
      }
    },
    deleteObject({ commit, state }, payload) {
      console.log(`[store] deleteObject, state: ${state}`)
      const hash = payload.objectHash
      DataApi.deleteHash(hash)
        .then((postState) => {
          console.log(`[store] Promise deleteObject, hash: ${hash}, postState: ${postState}`)
          commit('deleteObject', payload)
        })
        .catch((err) => {
          console.log(`[store] Failed to delete object: ${err}`)
        })
    },
    addObject({ commit, state }, payload) {
      console.log(`[store] addObject, state: ${state}`)
      const { content } = payload
      const { objectType } = payload

      return new Promise((resolve, reject) => {
        DataApi.post(objectType, content)
          .then((postState) => {
            console.log('1')
            console.log(`[store] addObject, content: ${content}, postState: ${postState}`)
            commit('objectsUpToDate', { objectsUpToDate: false })
            console.log('2')
            resolve()
          })
          .catch((err) => {
            console.log(`[store] Failed to add object: ${err}`)
            reject(err)
          })
      })
    },
    // addRelation({ commit, state }, payload) {
    // },
  }
}

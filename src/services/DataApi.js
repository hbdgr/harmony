import Connection from '@/services/Connection'

export default {
  getAll() {
    return Connection().get('objects')
  },
  getHash(hash) {
    return Connection().get(`objects/${hash}`)
  },
  postPrimaryElement(content) {
    return Connection().post('objects', {
      header: {
        object_type: 'PrimaryElement',
      },
      body: content,
    })
  },
  postRelationDefinition(definition, directed) {
    return Connection().post('objects', {
      header: {
        object_type: {
          RelationDefinition: {
            directed,
          },
        },
      },
      body: definition,
    })
  },
  post(objectType, content) {
    console.log('POST')
    switch (objectType) {
      case 'PrimaryElement':
        return this.postPrimaryElement(content)
      case 'RelationDefinition':
        return this.postRelationDefinition(content, false)
      default: {
        const errMsg = `post: unrecognized objectType: ${objectType}`
        console.log(errMsg)
        return errMsg
      }
    }
  },

  deleteHash(hash) {
    return Connection().delete(`objects/${hash}`)
  },
}

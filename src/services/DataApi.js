import Connection from '@/services/Connection';

export default {
  getAll() {
    return Connection().get('objects');
  },
  getHash(hash) {
    return Connection().get(`objects/${hash}`);
  },
  postPrimaryElement(content) {
    return Connection().post('objects', {
        header: {
          object_type: 'PrimaryElement',
        },
        body: content,
    });
  },
  postRelationDefinition(definition, directed) {
    return Connection().post('objects', {
        header: {
          object_type: {
            RelationDefinition: {
              directed: directed,
            },
          },
        },
        body: definition,
    });
  },
  post(objectType, content) {
    console.log("POST")
    switch (objectType) {
      case 'PrimaryElement':
        return this.postPrimaryElement(content)
        break
      case 'RelationDefinition':
        return this.postRelationDefinition(content, false)
        break
      default:
        errMsg = 'post: unrecognized objectType: ' + objectType
        console.log(errMsg)
        return errMsg
    }
    return Connection().post('objects', {
        header: {
          object_type: objectType,
        },
        body: content,
    });
  },

  deleteHash(hash) {
    return Connection().delete(`objects/${hash}`);
  },
};

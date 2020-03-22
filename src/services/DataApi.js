import Connection from '@/services/Connection';

export default {
  getAll() {
    return Connection().get('objects');
  },
  getHash(hash) {
    return Connection().get(`objects/${hash}`);
  },
  post(content) {
    return Connection().post('objects', {
        header: {
          object_type: "PrimaryElement",
        },
        body: content,
    });
  },
  deleteHash(hash) {
    return Connection().delete(`objects/${hash}`);
  },
};

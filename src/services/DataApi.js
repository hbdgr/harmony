import Connection from '@/services/Connection';

export default {
  getAll() {
    return Connection().get('objects');
  },
  getId(id) {
    return Connection().get(`objects/${id}`);
  },
  post(content) {
    return Connection().post('objects', { content });
  },
  deleteId(id) {
    return Connection().delete(`objects/${id}`);
  },
};

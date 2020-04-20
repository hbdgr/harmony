import Api from '@/services/DataApi'

export default {
  register(credentials) {
    return Api().post('auth', credentials)
  },
}

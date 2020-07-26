import axios from 'axios'

export default () => axios.create({
  baseURL: 'http://192.168.0.7:8000/',
  timeout: 10000,
  withCredentials: true,
  transformRequest: [data => JSON.stringify(data)],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

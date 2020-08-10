import axios from 'axios'

export default () => axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 10000,
  withCredentials: true,
  transformRequest: [data => JSON.stringify(data)],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

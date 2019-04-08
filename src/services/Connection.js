import axios from 'axios';

export default () =>
  axios.create({
    headers: { 'content-type': 'application/json' },
    baseURL: 'http://localhost:8000/',
  });

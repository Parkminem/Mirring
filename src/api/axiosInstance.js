import axios from 'axios';

const instance = axios.create({
  // baseURL: import.meta.env.VITE_APP_BASE_URL
  baseURL: 'http://222.239.218.187:9100/common'
});

export default instance;

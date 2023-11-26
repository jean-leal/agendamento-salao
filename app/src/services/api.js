import axios from 'axios';

const api = axios.create({
  //baseURL: 'https://app-salao.onrender.com'
  baseURL: __DEV__ ? 'http://192.168.3.16:8000' : 'hllllttps://app-salao.onrender.com'
});

export default api;
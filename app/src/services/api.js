import axios from 'axios';

const api = axios.create({
  //baseURL: 'https://app-salao.onrender.com'
  //baseURL: __DEV__ ? 'http://192.168.3.138:8000' : 'hllllttps://app-salao.onrender.com'
  baseURL: 'http://192.168.3.138:8000'
});

export default api;
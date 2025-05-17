import axios from 'axios';
import { getToken } from './authService';

const api = axios.create({
  baseURL: 'https://api.vestibulario.com',
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
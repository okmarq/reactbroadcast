import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const api = {
  register: (payload) => {
    return apiClient.post('api/register', payload);
  },

  login: (payload) => {
    return apiClient.post('api/login', payload);
  },

  logout: (token) => {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return apiClient.post('api/logout');
  },
};

export default api;

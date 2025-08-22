import axios from 'axios';

const API_REAL_URL = import.meta.env.VITE_APP_API_URL;
if (!API_REAL_URL) throw new Error('VITE_APP_API_URL is not defined in env!');

export const API_URL = API_REAL_URL + '/api';

const axiosClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default axiosClient;

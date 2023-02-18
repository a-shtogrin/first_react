import axios from 'axios';

export const networkInstance = axios.create({
  baseURL: 'https://randomuser.me/',
  timeout: 10000,
});

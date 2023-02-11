import axios from 'axios';

export const networkInstance = axios.create({
  baseURL: 'https://fruityvice.com/',
  timeout: 10000,
});

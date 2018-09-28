import axios from 'axios';
export const api = axios.create({
    baseURL: 'https://www.lottecinema.co.kr',
    timeout: 1000,
  });
import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://www.lottecinema.co.kr',
    timeout: 1000,
  });
  
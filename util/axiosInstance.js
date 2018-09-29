import axios from 'axios';
import qs from 'qs';

export const api = axios.create({
    baseURL: 'https://www.lottecinema.co.kr',
    timeout: 1000,
    paramsSerializer(params) {
      return qs.stringify(params, { arrayFormat: 'repeat' });
    },
  });
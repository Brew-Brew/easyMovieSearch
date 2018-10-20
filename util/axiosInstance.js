import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://www.lottecinema.co.kr',
    timeout: 1000,
  });

  export const kakao = axios.create({
    baseURL: 'https://dapi.kakao.com/v2',
    timeout: 1000,
  })
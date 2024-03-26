import { applyCaseMiddleware, axios, options } from './index';
import { AxiosResponse } from 'axios';

export const formDataClient = applyCaseMiddleware(axios.create({
  baseURL: process.env.REACT_APP_BACKEND_DOMAIN_API || 'http://localhost:3001/api/v1',
  headers: {
    'content-type': 'multipart/form-data',
  },
}), options);

formDataClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    const data = response.data;
    return data;
  }
);
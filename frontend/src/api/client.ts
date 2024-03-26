import { applyCaseMiddleware, axios, options } from './index'

export const client = applyCaseMiddleware(axios.create({
  baseURL: process.env.REACT_APP_BACKEND_DOMAIN_API || 'http://localhost:3001/api/v1',
}), options);
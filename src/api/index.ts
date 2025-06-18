import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://6763a6c017ec5852cae97bf8.mockapi.io',
});

api.interceptors.request.use((config) => {
  // if(token){
  //     config.headers.Authorization = "Bearer token"
  // }
  return config;
});

api.interceptors.response.use((config) => {
  return config;
});

import { api } from '../..';

export const getProduct = () => api.get('/product');

export const createProduct = (body: any) => api.post('/product', body);

export const deleteProduct = (id: string) => api.delete(`/product/${id}`);

export const updateProduct = ({ body, id }: { body: any; id: string }) =>
  api.put(`/product/${id}`, body);

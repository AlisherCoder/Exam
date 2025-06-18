import { api } from '../..';

export const getColors = () => api.get('/color');

export const createColor = (body: any) => api.post('/color', body);

export const deleteColor = (id: any) => api.delete(`/color/${id}`);

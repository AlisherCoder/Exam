import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import * as Product from '../service/product';

export const useProduct = () => {
  const client = useQueryClient();

  const getProduct = useQuery({
    queryKey: ['product'],
    queryFn: Product.getProduct,
  });

  const createProduct = useMutation({
    mutationFn: Product.createProduct,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['product'] });
    },
  });

  const deleteProduct = useMutation({
    mutationFn: Product.deleteProduct,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['product'] });
    },
  });

  const updateProduct = useMutation({
    mutationFn: Product.updateProduct,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['product'] });
    },
  });

  return { getProduct, createProduct, deleteProduct, updateProduct };
};

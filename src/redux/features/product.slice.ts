import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  title: string;
  price: number;
  image_url: string;
  color_id: string;
  desc: string;
  id: string;
}

export interface ProductState {
  value: any;
}

const initialState: ProductState = {
  value: '',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleSaved: (state, action: PayloadAction<Product>) => {
      state.value = action.payload;
    },
  },
});

export const { toggleSaved } = productSlice.actions;

export default productSlice.reducer;

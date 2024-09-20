import { createSlice } from '@reduxjs/toolkit';
import { state } from './states';

const cartSlice = createSlice({
  name: 'cart',
  initialState: state,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      state.products.push(product);
      state.cantidad += 1;
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(product => product.id !== productId);
      state.cantidad -= 1;
    },
    clearCart: (state) => {
      state.products = [];
      state.cantidad = 0;
    },
  },
});

// Exporta las acciones generadas por `createSlice`
export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

// Exporta el reducer
export default cartSlice.reducer;

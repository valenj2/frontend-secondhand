import { createSlice } from '@reduxjs/toolkit';
import { state } from './states';

export const Products = createSlice({
  name: 'products',
  initialState: state,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
      state.state = 'Success'
    },
    setProductsByCategory: (state, action) => {
      state.ProductsByCategory = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    resetSuccess: (state) =>{
      state.success=false;
    },
    setActivateFailure: (state, action) => {
      state.error = action.payload;
    },
    
  },
});

export default Products.reducer;
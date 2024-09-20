// reducer.js
import { createReducer } from '@reduxjs/toolkit';
import { setLoading, setMessage, setToken, setAuthenticated, setUser, logout } from './actions';

const initialState = {
  loading: false,
  message: '',
  token: null,
  isAuthenticated: false,
  user: {} // Puedes inicializar con un objeto vacío
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLoading, (state, action) => {
      state.loading = action.payload;
    })
    .addCase(setMessage, (state, action) => {
      state.message = action.payload;
    })
    .addCase(setToken, (state, action) => {
      state.token = action.payload;
    })
    .addCase(setAuthenticated, (state, action) => {
      state.isAuthenticated = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(logout, () => initialState);
});

export default authReducer;

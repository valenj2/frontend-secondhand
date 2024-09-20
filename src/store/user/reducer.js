// reducer.js
import { createReducer } from '@reduxjs/toolkit';
import { setUser, clearUser } from './actions';

const initialState = {
  tipoDeUsuario: null,
  usuario: null,
  nombre: null,
  apellido: null,
  email: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, action) => ({
      ...state,
      ...action.payload,
    }))
    .addCase(clearUser, () => initialState);
});

export default userReducer;

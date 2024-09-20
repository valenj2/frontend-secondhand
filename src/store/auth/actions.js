import { createAction } from '@reduxjs/toolkit';
import { post } from '../apiInstance';

export const setToken = createAction('auth/setToken');
export const setAuthenticated = createAction('auth/setAuthenticated');
export const setUser = createAction('auth/setUser');
export const setMessage = createAction('auth/setMessage');
export const setLoading = createAction('auth/setLoading');
export const logout = createAction('auth/logout');

export const login = (username, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await post('/auth/login', { usuario: username, contrasena: password });
    console.log(response)
    if (response.status === 200) {
      const { token, userDetails } = response.data;
      const { usuario, nombre, apellido, email, rol } = userDetails;
      sessionStorage.setItem('authToken', token);
      dispatch(setToken(token));
      dispatch(setAuthenticated(true));
      dispatch(setUser({ usuario, nombre, apellido, email, rol }));
      dispatch(setMessage('Login successful'));
    } else {
      dispatch(setMessage('Login failed: ' + response.data.message));
    }
  } catch (error) {
    dispatch(setMessage('Login failed: ' + error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const performLogout = () => (dispatch) => {
  sessionStorage.removeItem('authToken'); 
  dispatch(logout()); 
};

import { createAction } from '@reduxjs/toolkit';

export const addProduct = createAction('cart/addProduct');
export const removeProduct = createAction('cart/removeProduct');
export const clearCart = createAction('cart/clearCart');

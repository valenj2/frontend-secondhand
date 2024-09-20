import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer  from "./products/reducer";
import cartReducer from './carrito/reducer';
import userReducer from "./user/reducer";
import authReducer from "./auth/reducer";

export const store = configureStore({
    reducer: {
        products: ProductsReducer,
        cart: cartReducer,
        user: userReducer,
        auth: authReducer
    },
  });
  
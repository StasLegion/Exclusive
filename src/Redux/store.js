import { configureStore } from "@reduxjs/toolkit"
import CartReducer from './Reducers/CartSlice.js';
import WishReducer from './Reducers/WishSlice.js';

export const store = configureStore({
   reducer: {
      cart: CartReducer,
      wish: WishReducer
   }
})
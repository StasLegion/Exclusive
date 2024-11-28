import { configureStore } from "@reduxjs/toolkit"
import CartReducer from './Reducers/CartSlice.js';

export const store = configureStore({
   reducer: {
      cart: CartReducer
   }
})
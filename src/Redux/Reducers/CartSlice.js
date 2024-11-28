import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
   name: 'cart',
   initialState: {
      products: [],
      totalprice: 0
   },
   reducers: {
      addProduct: (state, action) => {
         state.products.push(action.payload);
      },
      revoweProduct: (state, action) => {
         state.products = state.products.filter(e => e.title !== action.payload)
      },
      addCount: (state, action) => {
         const finditem = state.products.find(e => e.title === action.payload.title);
         if(finditem) {
            finditem.count += 1;
            finditem.price += finditem.price;
         }
      },

      revoweCount: (state, action) => {
         const finditem = state.products.find(e => e.title === action.payload.title);
         const findPrice = state.products.find(e => e.title === action.payload.title);
         if(finditem.count > 1) {
            finditem.count -= 1;
            finditem.price -= findPrice.price;
         }
      },
   }
},)

export const {addProduct, revoweProduct, addCount, revoweCount} = CartSlice.actions;
export default CartSlice.reducer;
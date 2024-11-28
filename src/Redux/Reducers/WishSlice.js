import { createSlice } from "@reduxjs/toolkit";

const WishSlice = createSlice({
   name: 'wish',
   initialState: {
      wishlist: [],
      viewed: []
   },
   reducers: {
      addWish: (state, action) => {
         const finditem = state.wishlist.find(e => e.title === action.payload.title);
         if(!finditem) {
            state.wishlist.push(action.payload);
         }
      },
      removeWish: (state, action) => {
         state.wishlist = state.wishlist.filter(e => e.title !== action.payload.title)
      },
      viewAdd: (state, action) => {
         const findItem = state.viewed.find(e => e.title === action.payload.title);
         if (!findItem) {
            state.viewed.push(action.payload)
         }
      },
      viewRemove: (state, action) => {
         state.viewed = state.viewed.filter(e => e.title !== action.payload.title)
      }
   }
})

export const {addWish, removeWish, viewAdd, viewRemove} = WishSlice.actions;
export default WishSlice.reducer;
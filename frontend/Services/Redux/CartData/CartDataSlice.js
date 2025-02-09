import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const CartDataSlice = createSlice({
  name: "cartDataSlice",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      if (state.items.find((x) => x.id === action.payload?.id)) {
        console.log(state.items.includes((x) => x.id === action.payload?.id));
        state.items.forEach((x) => {
          if (x.id === action.payload?.id) {
            x.count++;
          }
        });
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action) => {
      if (
        state.items.find((x) => x.id === action.payload?.id && x?.count > 1)
      ) {
        state.items?.forEach((x) => {
          if (x.id === action.payload?.id) {
            x.count--;
          }
        });
      } else {
        state.items = state.items.filter((x) => x.id !== action.payload?.id);
      }
    },
    resetCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeFromCart, resetCart } =
  CartDataSlice.actions;

export default CartDataSlice.reducer;

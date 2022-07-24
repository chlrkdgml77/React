import { createSlice } from "@reduxjs/toolkit";

const initState = {showCart: false, amount: 1, showShop: false};

const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    isShowCart(state) {
      state.showCart = !state.showCart
    },
    isShowShop(state) {
      if (state.amount === 0) {
        state.showShop = false;
      }
    },
    increse(state) {
      state.amount++;
    },
    decrese(state) {
      state.amount--;
      if (state.amount < 1) {
        state.amount = 0;
        state.showCart = false;
      }
    },
    addItem(state) {
      state.amount = 1;
      state.showShop = true;
    }
  }
})

export default cartSlice;
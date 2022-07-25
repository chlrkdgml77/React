import { createSlice } from "@reduxjs/toolkit";

const initState = {showCart: false, amount: 1, showShop: false, itemAmount: 0, items: []};

const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addItemToCart(state, action) {
      state.amount = 1;
      state.itemAmount = state.itemAmount + 1;
      state.showShop = true;

      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          amount: 1,
          totalPrice: newItem.price,
          name: newItem.title
        })
      } 
    },
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
        state.itemAmount = 0
        state.showCart = false;
      }
    },
  }
})

export default cartSlice;
import {configureStore} from "@reduxjs/toolkit"

import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {cart: cartSlice.reducer}
})

export const cartAction = cartSlice.actions;

export default store;
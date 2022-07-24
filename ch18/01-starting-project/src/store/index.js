import {createStore} from "redux"
import {createSlice, configureStore} from "@reduxjs/toolkit"

const initState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increse(state) {
      state.counter++;
    },
    decrese(state) {
      state.counter--;
    },
    increseMore(state, action) {
      state.counter = state.counter + action.value;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

// const counterReducer = (state = initState, action) => {
//   if (action.type === "increse") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     }
//   }
//   if (action.type === "increse_more") {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter
//     }
//   }

//   if (action.type === "decrese") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     }
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter
//     }
//   }

//   return state;
// }

const store = configureStore({
  reducer: {counter: counterSlice.reducer}
});

export default store;


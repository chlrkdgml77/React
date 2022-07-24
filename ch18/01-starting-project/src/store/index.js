import {createStore} from "redux"

const counterReducer = (state = {counter: 0}, action) => {
  if (action.type === "increse") {
    return {
      counter: state.counter + 1
    }
  }

  if (action.type === "decrese") {
    return {
      counter: state.counter - 1
    }
  }

  return state;
}

const store = createStore(counterReducer);

export default store;


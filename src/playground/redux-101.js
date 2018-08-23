import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
  type: "SET",
  count
});

const resetCount = () => ({
  type: "RESET"
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
      break;
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
      break;
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
      break;
    default:
      return state;
      break;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(decrementCount({ decrementBy: 6 }));

store.dispatch(setCount({ count: 20 }));
store.dispatch(resetCount());

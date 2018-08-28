import { createStore, combineReducers, applyMiddleware } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import thunk from "redux-thunk";

// CREATE STORE

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};

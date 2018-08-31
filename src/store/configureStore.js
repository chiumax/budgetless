import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";

// CREATE STORE

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};

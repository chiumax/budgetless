import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import getVisibleExpenses from "./selectors/expenses.js";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import {
  setTextFilter,
  setEndDate,
  setStartDate,
  sortByAmount,
  sortByDate
} from "./actions/filters";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

// const state = store.getState();
// const visible = getVisibleExpenses(state.expenses, state.filters);
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  const visible = getVisibleExpenses(state.expenses, state.filters);
  console.log(state);
  console.log(visible);
});
store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

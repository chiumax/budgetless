import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import getVisibleExpenses from "./selectors/expenses.js";
import {
  addExpense,
  editExpense,
  removeExpense,
  startSetExpenses
} from "./actions/expenses";
import {
  setTextFilter,
  setEndDate,
  setStartDate,
  sortByAmount,
  sortByDate
} from "./actions/filters";
import { login, logout } from "./actions/auth";
import "normalize.css/normalize.css";

import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";
import "animate.css/animate.min.css";
import "./styles/styles.scss";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    history.push("/");
    renderApp();
  }
});

import React from "react";
import { connect } from "react-redux";
import getExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";
import { BigNumber } from "bignumber.js";
import { Link } from "react-router-dom";

export const ExpensesSummary = props => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Currently viewing <span>{props.expenseCount}</span>{" "}
          {props.expenseCount > 1 || props.expenseCount == 0
            ? "expenses"
            : "expense"}{" "}
          totalling{" "}
          <span>
            {"$" +
              BigNumber(props.expensesTotal)
                .div(100)
                .toFormat(2)}
          </span>
        </h1>
        <div className="page-header__actions">
          <Link to="/create" className="button button--add">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    expenseCount: state.expenses.length,
    expensesTotal: getExpensesTotal(state.expenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

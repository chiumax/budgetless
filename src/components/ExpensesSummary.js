import React from "react";
import { connect } from "react-redux";
import getExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";
import { BigNumber } from "bignumber.js";

export const ExpensesSummary = props => (
  <div>
    <p>
      Currently viewing {props.expenseCount}{" "}
      {props.expenseCount > 1 ? "expenses" : "expense"} totalling{" "}
      {numeral(BigNumber(props.expensesTotal).div(100)).format("$0,0.00")}
    </p>
  </div>
);

const mapStateToProps = state => {
  return {
    expenseCount: state.expenses.length,
    expensesTotal: getExpensesTotal(state.expenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

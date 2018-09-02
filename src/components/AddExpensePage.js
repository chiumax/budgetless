import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    if (this.props.expenseLength === false) {
      this.props.startAddExpense(expense);
    }
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add An Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            onSubmit={this.onSubmit}
            expenseLength={this.props.expenseLength}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startAddExpense: expense => dispatch(startAddExpense(expense))
  };
};

const mapStateToProps = state => {
  return {
    expenseLength: state.expenses.length >= 5
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExpensePage);

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
        <h1>Add an expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
          expenseLength={this.props.expenseLength}
        />
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

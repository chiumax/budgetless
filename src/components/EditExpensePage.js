import React from "react";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";
import Anime from "react-anime";

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    if (this.props.expenseLength === false) {
      this.props.startEditExpense(this.props.expense.id, expense);
    }

    this.props.history.push("/");
  };
  onClick = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Anime
          easing="easeInExpo"
          duration={1000}
          direction="normal"
          translateX={["-13rem", 0]}
          opacity={[0, 1]}
        >
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Edit Expense</h1>
            </div>
          </div>
          <div className="content-container">
            <ExpenseForm
              expense={this.props.expense}
              onSubmit={this.onSubmit}
              expenseLength={false}
            />
            <button className="button button--secondary" onClick={this.onClick}>
              Remove Expense
            </button>
          </div>
        </Anime>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    }),
    expenseLength: state.expenses.length >= 5
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: id => dispatch(startRemoveExpense(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);

import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import swal from "sweetalert";
import NavigationPrompt from "react-router-navigation-prompt";
import { BigNumber } from "bignumber.js";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense
        ? BigNumber(props.expense.amount)
            .div(100)
            .toString(10)
        : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: "",
      onFormDirty: false,
      modalTitle: "Are You Sure?",
      modalText:
        "Once you leave the page, you will not be able to recover your edits.",
      modalIcon: "warning",
      modalButtons: {
        confirm: { text: "Leave", value: true },
        cancel: "Stay"
      }
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    const formdirty = e.target.value.length > 0;
    this.setState(() => ({
      description,
      onFormDirty: formdirty
    }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    const formdirty = e.target.value.length > 0;

    this.setState(() => ({
      note,
      onFormDirty: formdirty
    }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    const formdirty = e.target.value.length > 0;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount, onFormDirty: formdirty }));
    }
  };

  onDateChange = createdAt => {
    const formdirty = true;

    if (createdAt) {
      this.setState(() => ({ createdAt, onFormDirty: formdirty }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused
    }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      //   Set error state equal to 'Please provide description and amount.'
      this.setState(() => ({
        error: "Please provide a description and an amount value."
      }));
    } else {
      //   Clear the error
      const modalTemp = this.props.expense
        ? "Expense Edited!"
        : "Expense Created!";
      this.setState(() => ({
        error: "",
        onFormDirty: false,
        modalTitle: modalTemp,
        modalText:
          "You can edit/view expenses by clicking on them at the Dashboard",
        modalIcon: "success",
        modalButtons: {
          confirm: { text: "Ok", value: true }
        }
      }));
      if (this.props.expenseLength === true) {
        this.setState(() => ({
          modalIcon: "error",
          modalButtons: {
            confirm: { text: "Ok", value: true }
          },
          modalText:
            "We're sorry for limiting this account to 5 expenses since we are currently hosted using a free service. ",
          modalTitle: "We're sorry."
        }));
      }
      this.props.onSubmit({
        description: this.state.description,
        amount: BigNumber(this.state.amount)
          .multipliedBy(100)
          .toString(10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  componentWillUnmount() {}
  hideModal = () => {
    swal.close();
  };
  render() {
    return (
      <div>
        <NavigationPrompt when={this.state.onFormDirty}>
          {({ isActive, onConfirm, onCancel }) => {
            if (isActive) {
              swal({
                title: this.state.modalTitle,
                text: this.state.modalText,
                icon: this.state.modalIcon,
                buttons: this.state.modalButtons,
                dangerMode: true,
                closeOnEsc: false,
                closeOnClickOutside: false
              }).then(willDelete => {
                if (willDelete) {
                  onConfirm();
                } else {
                  onCancel();
                  this.hideModal();
                }
              });
            }
          }}
        </NavigationPrompt>

        <form onSubmit={this.onSubmit} className="form">
          {this.state.error && (
            <p className="form__error">{this.state.error}</p>
          )}
          <input
            type="text"
            placeholder="Description"
            className="text-input"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            maxLength="100"
          />
          <input
            type="text"
            placeholder="Amount"
            className="text-input"
            value={this.state.amount}
            onChange={this.onAmountChange}
            maxLength="30"
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <textarea
            value={this.state.note}
            onChange={this.onNoteChange}
            placeholder="Add a note for your expense (optional)"
            maxLength="600"
            className="textarea"
          />
          <div>
            <button className="button button--add">
              {this.props.expense ? "Edit Expense" : "Add Expense"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

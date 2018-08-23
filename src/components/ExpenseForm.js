import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import swal from "sweetalert";
import NavigationPrompt from "react-router-navigation-prompt";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
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
    console.log(createdAt);

    if (createdAt) {
      this.setState(() => ({ createdAt }));
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

      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  componentWillUnmount() {
    console.log("component unmounted");
  }
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
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
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
          />
          <button>{this.props.expense ? "Edit Expense" : "Add Expense"}</button>
        </form>
      </div>
    );
  }
}

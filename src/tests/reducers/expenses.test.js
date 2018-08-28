import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-5"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// add expense
test("should add expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "4",
      description: "hello",
      note: "",
      amount: 3333,
      createdAt: "900"
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

// edit expense
test("should edit an expense based on id", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      description: "hecc",
      note: " hey there's something here now!",
      amount: 999
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    { ...expenses[1], ...action.updates },
    expenses[2]
  ]);
});

// when edit id not exist
test("should edit an expense based on id", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "69",
    updates: {
      description: "hecc",
      note: " hey there's something here now!",
      amount: 999
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(action.expenses);
});

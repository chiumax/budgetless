import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "32132321" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "32132321"
  });
});

test("Should setup edit expense action object", () => {
  const action = editExpense("321321", { note: "hello" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "321321",
    updates: {
      note: "hello"
    }
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 100,
    createdAt: 100,
    note: "This was last months rent"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      amount: 0,
      createdAt: 0,
      note: "",
      id: expect.any(String)
    }
  });
});

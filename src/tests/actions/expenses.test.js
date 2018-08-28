import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  addExpense,
  editExpense,
  removeExpense,
  startAddExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

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
  const action = addExpense(expenses[2]);
  const store = createMockStore({});
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("should add expense to database and store", done => {
  const store = createMockStore({});
  const expenseData = {
    description: "hey",
    amount: "300",
    createdAt: 10,
    note: "Hello"
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with defaults to database and store", done => {
  const store = createMockStore({});
  const expenseData = {
    description: "",
    amount: "",
    createdAt: 0,
    note: ""
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});
// test("should setup add expense action object with default values", () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       description: "",
//       amount: 0,
//       createdAt: 0,
//       note: "",
//       id: expect.any(String)
//     }
//   });
// });

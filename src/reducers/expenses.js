// EXPENSES REDUCER
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
      break;
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id != action.id;
      });
      break;
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });

    case "SET_EXPENSES":
      return action.expenses;
      break;
    default:
      return state;
      break;
  }
};

export default expensesReducer;

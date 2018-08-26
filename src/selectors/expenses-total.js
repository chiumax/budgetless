import { BigNumber } from "bignumber.js";

// GET TOTAL EXPENSES
const getExpensesTotal = expenses => {
  const addSum = (array, currentVal) => BigNumber(array).plus(currentVal);
  const expenseList = expenses.map(expense => expense.amount);
  return expenseList.reduce(addSum, 0).toString(10);
};

export default getExpensesTotal;

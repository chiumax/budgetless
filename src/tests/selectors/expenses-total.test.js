import getExpensesTotal from "../../selectors/expenses-total";

test("should test for empty array", () => {
  const expenses = [];
  const result = getExpensesTotal(expenses);
  expect(result).toEqual("0");
});

test("should test for one item in array", () => {
  const expenses = [
    {
      description: "heyo",
      amount: "4"
    }
  ];
  const result = getExpensesTotal(expenses);
  expect(result).toEqual("4");
});

test("should test for multiple items in array", () => {
  const expenses = [
    {
      description: "heyo",
      amount: "1"
    },
    {
      description: "heyo",
      amount: "3"
    },
    {
      description: "heyo",
      amount: "5"
    }
  ];
  const result = getExpensesTotal(expenses);
  expect(result).toEqual("9");
});

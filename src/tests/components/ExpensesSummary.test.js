import { ExpensesSummary } from "../../components/ExpensesSummary";
import { shallow } from "enzyme";
import React from "react";

test("test the expenseCount for how many visible expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={23} expensesTotal={"22222"} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("test the total amount of the expenses for the variable expensesTotal", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={"123"} />
  );
  expect(wrapper).toMatchSnapshot();
});

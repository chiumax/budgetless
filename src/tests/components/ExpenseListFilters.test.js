import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt data correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

// should handle text change
test("should handle text change correctly", () => {
  const textChange = "hello";
  wrapper.find("input").simulate("change", {
    target: { value: textChange }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(textChange);
});
// should sort by date
test("should sort by date correctly", () => {
  const sort = "date";
  wrapper.find("select").simulate("change", {
    target: { sort }
  });
  expect(sortByDate).toHaveBeenCalled;
});

// should sort by amount
test("should sort by amount correctly", () => {
  const sort = "amount";
  wrapper.find("select").simulate("change", {
    target: { sort }
  });
  expect(sortByAmount).toHaveBeenCalled;
});

// should handle date changes
test("should handle date changes correctly", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");

  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({
    startDate,
    endDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
// spies

// state
// should handle date focus changes
test("should handle date focus changes", () => {
  const calendarFocused = "endDate";
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(
    calendarFocused
  );
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});

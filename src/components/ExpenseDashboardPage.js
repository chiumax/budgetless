import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";
import Anime from "react-anime";

const ExpenseDashboardPage = () => (
  <div>
    <Anime
      easing="easeInExpo"
      duration={1000}
      direction="normal"
      delay={(el, index) => index * 240}
      translateX={["-13rem", 0]}
      opacity={[0, 1]}
    >
      <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
      </div>
    </Anime>
  </div>
);

export default ExpenseDashboardPage;

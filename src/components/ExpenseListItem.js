import React from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <NavLink to={"/edit/" + id}>
      <h3>{description}</h3>
    </NavLink>
    <p>{id}</p>
    <p>
      {amount}-{createdAt}
    </p>
  </div>
);

export default ExpenseListItem;

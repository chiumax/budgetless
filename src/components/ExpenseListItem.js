import React from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import { BigNumber } from "bignumber.js";

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <NavLink to={"/edit/" + id}>
      <h3>{description}</h3>
    </NavLink>
    <p>{id}</p>
    <p>
      {numeral(BigNumber(amount).div(100)).format("$0,0.00")}-
      {moment(createdAt).format("MMMM Do, YYYY")}
    </p>
  </div>
);

export default ExpenseListItem;

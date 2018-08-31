import React from "react";
import NavigationPrompt from "react-router-navigation-prompt";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Go Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Go Create
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Go Help
    </NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);

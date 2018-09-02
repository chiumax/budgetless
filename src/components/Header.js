import React from "react";
import NavigationPrompt from "react-router-navigation-prompt";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import Logout from "./LogoutButton";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Budgetless</h1>
        </Link>
        <Logout onClick={startLogout} />
        {/* In case if react-social-buttons doesn't work out so well 
        <button className="button button--link" onClick={startLogout}>
          Logout
        </button> */}
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);

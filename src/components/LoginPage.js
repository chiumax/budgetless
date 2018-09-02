import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import { GoogleLoginButton } from "react-social-login-buttons";

const greetings = [
  "Welcome!",
  "Welcome Back!",
  "You're new here!",
  "Howdy, partner!",
  "I come in peace!",
  "Ahoy, matey!",
  "Sup, homeslice!",
  "What's crackin'?",
  "Hallo!",
  "Aloha!",
  "¡Hola!",
  "Bonjour!",
  "Ciao!",
  "Greetings!"
];

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Budgetless</h1>
      <p>{greetings[Math.floor(Math.random() * greetings.length)]}</p>
      <p>Login to track and manage your expenses.</p>
      <GoogleLoginButton onClick={startLogin} align={"center"} />
      <button onClick={startLogin} className="button">
        Login with google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

// cosnt mapStateToProps
export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);

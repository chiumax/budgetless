import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimation from "react-animate-on-scroll";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div className="whole-page scrollbar">
          <div className="content">
            <div className="header__sticky">
              <Header />
            </div>
            <div>
              <Component {...props} />
            </div>
          </div>
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true} offset={0}>
            <div className="footer">
              <Footer />
            </div>{" "}
          </ScrollAnimation>
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);

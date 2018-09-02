import React from "react";
import { createButton } from "react-social-login-buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { createSvgIcon } from "react-social-login-buttons";

const Icon = props => <FontAwesomeIcon icon={faSignOutAlt} />;
const config = {
  text: "Logout",
  icon: Icon,
  iconFormat: name => `fas fa-${name}`,
  style: {
    background: "#82172b",
    transition: "background 0.3s ease",
    border: "none"
  },
  activeStyle: { background: "#e74c3c" }
};
/** My logout button. */
const LogOut = createButton(config);

export default LogOut;

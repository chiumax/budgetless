import React from "react";
import { Emoji } from "emoji-mart";

const Footer = () => (
  <div className="content-container">
    <h4>
      Made with <Emoji emoji="heart" native={true} size={16} /> by{" "}
      <a href="https://github.com/dumblole" className="link-hover">
        dumblole
      </a>
    </h4>
  </div>
);

export default Footer;

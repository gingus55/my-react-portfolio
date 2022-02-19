import React from "react";

import htmlLogo from "../../assets/images/html-logo-2.png";
import cssLogo from "../../assets/images/css-img.png";

import "./index.css";

export const LeftAside = () => {
  return (
    <div className="container">
      <img className="logos" src={htmlLogo} alt="html-logo" />
      <img className="logos" src={cssLogo} alt="css-logo" />
    </div>
  );
};

import React from "react";

import htmlLogo from "../../assets/images/html-logo-2.png";
import cssLogo from "../../assets/images/css-img.png";
import javascriptLogo from "../../assets/images/js-logo.png";
import jqueryLogo from "../../assets/images/jquery-logo.png";
import githubLogo from "../../assets/images/git-img.png";
import mysqlLogo from "../../assets/images/mysql-img.png";
import nodeLogo from "../../assets/images/node-js-img.png";

import "./index.css";
import { Typography } from "@mui/material";
import { borderRight } from "@mui/system";

export const LeftAside = () => {
  return (
    <div className="container">
      <Typography align="center" variant="h5">
        Tool Box
      </Typography>
      <img className="logos" src={htmlLogo} alt="html-logo" />
      <img className="logos" src={cssLogo} alt="css-logo" />
      <img className="logos" src={javascriptLogo} alt="js-logo" />
      <img className="logos" src={jqueryLogo} alt="jquery-logo" />
      <img className="logos" src={githubLogo} alt="github-logo" />
      <img className="logos" src={mysqlLogo} alt="mysql-logo" />
      <img className="logos" src={nodeLogo} alt="node-logo" />
    </div>
  );
};

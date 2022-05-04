import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL} history={customHistory}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

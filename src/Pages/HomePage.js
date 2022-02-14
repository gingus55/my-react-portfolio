import React from "react";
import { Banner } from "../Components/Banner/Banner";
import { Header } from "../Components/Header/Header";

import "./MainPage.css";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      {/* <ProjectCard /> */}
      <div className="flex-container">
        <div className="left-aside"></div>
        <div className="right-side"></div>
      </div>
    </>
  );
};

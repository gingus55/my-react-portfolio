import React from "react";
import { Banner } from "../Components/Banner/Banner";
import { Header } from "../Components/Header/Header";
import { ProjectCard } from "../Components/ProjectCard/ProjectCard";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProjectCard />
    </>
  );
};

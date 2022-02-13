import { Typography } from "@mui/material";
import React from "react";
import { Header } from "../Components/Header/Header";

export const Home = () => {
  const froggy = "title of page";
  return (
    <>
      <h1>{froggy}</h1>
      <Header />
      <Typography variant="h1" component="h2">
        Home Page
      </Typography>
    </>
  );
};

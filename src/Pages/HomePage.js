import { Grid } from "@mui/material";
import React from "react";
import { Banner } from "../Components/Banner/Banner";
import { Header } from "../Components/Header/Header";
import { LeftAside } from "../Components/LeftAside/LeftAside";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <LeftAside />
        </Grid>
        <Grid item xs={10}>
          <div className="right-side"></div>
        </Grid>
      </Grid>
    </>
  );
};

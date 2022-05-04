import { Grid } from "@mui/material";
import React from "react";
import { Banner } from "../Components/Banner/Banner";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { LeftAside } from "../Components/LeftAside/LeftAside";
import { RightSide } from "../Components/RightSide/RightSide";

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
          <RightSide />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

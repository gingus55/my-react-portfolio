import { Button, Grid, Typography } from "@mui/material";

import pixelChris from "../../assets/images/PixelChris.jpg";

import "./index.css";

export const Banner = () => {
  return (
    <Grid sx={{ paddingLeft: "24px", marginTop: "10px" }} container spacing={2}>
      <Grid item xs={6} sx={{ padding: "20px" }}>
        <img className="pixel" src={pixelChris} alt="pixel of Chris Bradshaw" />
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        xs={6}
        justify="center"
      >
        <Typography textAlign="center">
          Maths teacher of 13 years looking to learn something new. Always had
          an interest in coding since writing bootdisks for games on my 486!
        </Typography>
        <Button
          variant="outlined"
          onClick={() => {
            window.location.replace("http://localhost:3000/Contact");
          }}
          size="medium"
        >
          Contact Me
        </Button>
      </Grid>
    </Grid>
  );
};

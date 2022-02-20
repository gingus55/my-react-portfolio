import { Button, Grid, Typography } from "@mui/material";

import pixelChris from "../../assets/images/PixelChris.jpg";

import "./index.css";

export const Banner = () => {
  return (
    <Grid sx={{ paddingLeft: "24px", marginTop: "10px" }} container spacing={2}>
      <Grid item xs={6}>
        <img className="pixel" src={pixelChris} alt="pixel of Chris Bradshaw" />
      </Grid>
      <Grid item xs={6}>
        <Typography textAlign="center" pr="24%" pt="24%">
          Maths teacher of 13 years looking to learn something new. Always had
          an interest in coding since writing bootdisks for games on my 486!
        </Typography>
        <Button
          sx={{ ml: 10, mr: 10, mt: 1 }}
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

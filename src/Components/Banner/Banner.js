import { Button, Grid, Typography } from "@mui/material";

import pixelChris from "../../assets/images/PixelChris.jpg";

import "./index.css";

export const Banner = () => {
  return (
    <Grid sx={{ paddingLeft: "24px", marginTop: "10px" }} container spacing={2}>
      <Grid
        item
        container
        justifyContent="center"
        xs={6}
        sx={{ padding: "20px" }}
      >
        <img className="pixel" src={pixelChris} alt="pixel of Chris Bradshaw" />
      </Grid>

      <Grid
        item
        container
        xs={6}
        sx={{ paddingRight: "24px" }}
        justifyContent="center"
        direction="column"
        textAlign="center"
      >
        <Typography>
          Maths teacher of 13 years looking to learn something new. Always had
          an interest in coding since writing boot-disks for games on my 486!
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

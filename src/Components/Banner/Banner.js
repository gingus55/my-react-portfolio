import { Button, Grid, Typography } from "@mui/material";

import pixelChris from "../../assets/images/PixelChris.jpg";

import "./index.css";

export const Banner = () => {
  return (
    <Grid
      sx={{ paddingLeft: "24px", marginTop: "10px", pb: "24px" }}
      container
      spacing={3}
    >
      <Grid
        item
        container
        justifyContent="center"
        alignContent="center"
        xs={12}
        sm={6}
        // sx={{ padding: "20px" }}
      >
        <img className="pixel" src={pixelChris} alt="pixel of Chris Bradshaw" />
      </Grid>

      <Grid
        item
        container
        xs={12}
        sm={6}
        sx={{ paddingRight: "24px", paddingBottom: "24px" }}
        justifyContent="center"
        alignContent="center"
        direction="column"
        textAlign="center"
      >
        <Typography>
          Maths teacher turned Full Stack Developer with The University of
          Birmingham. Always had a passion for coding since writing boot-disks
          for games on my 486!
        </Typography>
        <Button
          variant="outlined"
          onClick={() => {
            window.location.href =
              "https://gingus55.github.io/my-react-portfolio/Contact";
          }}
          size="medium"
        >
          Contact Me
        </Button>
      </Grid>
    </Grid>
  );
};

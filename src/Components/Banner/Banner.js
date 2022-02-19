import { Image } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import pixelChris from "../../assets/images/PixelChris.jpg";

import "./index.css";

export const Banner = () => {
  return (
    <Grid sx={{ paddingLeft: "24px", marginTop: "10px" }} container spacing={2}>
      <Grid item xs={6}>
        <img className="pixel" src={pixelChris} />
      </Grid>
      <Grid item xs={6}>
        <Typography textAlign="center" p="10px" m="10px">
          Maths teacher of 13 years looking to learn something new. Always had
          an interest in coding since writing bootdisks for games on my 486!
        </Typography>
      </Grid>
    </Grid>
  );
};

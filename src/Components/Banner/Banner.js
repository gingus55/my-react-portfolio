import { Image } from "@mui/icons-material";
import { Grid } from "@mui/material";
import pixelChris from "../../assets/images/PixelChris.jpg";

export const Banner = () => {
  return (
    <Grid container spacing={2}>
      <Image src={pixelChris} />
    </Grid>
  );
};

import { Grid, Typography } from "@mui/material";
import linkedInIcon from "../../assets/images/linked-in.png";
import gitHubIcon from "../../assets/images/github.png";
import cvIcon from "../../assets/images/cv-icon.png";

export const Footer = () => {
  return (
    <Grid item xs={12} textAlign="center">
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <img
          onClick={() => {
            window.location.href =
              "https://linkedin.com/in/chris-bradshaw-39549421a";
          }}
          className="icon"
          src={linkedInIcon}
          alt="linkedInLogo"
        />

        <img
          onClick={() => {
            window.location.href = "https://github.com/gingus55";
          }}
          className="icon"
          src={gitHubIcon}
          alt="linkedInLogo"
        />

        <img className="icon" src={cvIcon} alt="linkedInLogo" />
      </Grid>
      <Grid item xs={12}>
        <Typography>Contact Email: gingus55@hotmail.com</Typography>
      </Grid>
    </Grid>
  );
};

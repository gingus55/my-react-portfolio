import { Grid } from "@mui/material";
import linkedInIcon from "../../assets/images/linked-in.png";
import gitHubIcon from "../../assets/images/github.png";
import cvIcon from "../../assets/images/cv-icon.png";

import "./index.css";

export const ContactLinks = () => {
  return (
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
  );
};

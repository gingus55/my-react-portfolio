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
      alignContent="center"
    >
      <img className="icon" src={linkedInIcon} alt="linkedInLogo" />

      <img className="icon" src={gitHubIcon} alt="linkedInLogo" />

      <img className="icon" src={cvIcon} alt="linkedInLogo" />
    </Grid>
  );
};

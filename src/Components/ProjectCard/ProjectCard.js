import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export const ProjectCard = ({ project, index, width }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card key={index} sx={{ flexGrow: 1 }}>
        <CardMedia component="img" height="200" image={project.image} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              window.location.replace(project.deployLink);
            }}
            size="small"
          >
            Live Link
          </Button>
          <Button
            onClick={() => {
              window.location.replace(project.gitLink);
            }}
            size="small"
          >
            Repository
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ProjectCard = ({ project, index }) => {
  return (
    <Card key={index} sx={{ flexGrow: 1, maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt="green iguana"
      />
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
  );
};

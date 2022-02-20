import { ProjectCard } from "../ProjectCard/ProjectCard";
import fitnessImage from "../../assets/images/fit-screenshot.png";
import codeQuizImage from "../../assets/images/cq-screenshot.png";
import weatherImage from "../../assets/images/wd-screenshot.png";
import empTraImage from "../../assets/images/emptrack-screenshot.png";
import workSchedImage from "../../assets/images/ws-screenshot.png";
import { Grid } from "@mui/material";
import sasImage from "../../assets/images/sas-screenshot.png";

const projects = [
  {
    title: "Fitness App",
    image: fitnessImage,
    description:
      "An app to create and share your own workout routines. You can create a user account and edit your actions.",
    gitLink: "https://github.com/gingus55/fitness-app",
    deployLink: "https://fierce-lowlands-38129.herokuapp.com/",
  },
  {
    title: "Weather Dashboard",
    image: weatherImage,
    description:
      "A weather dashboard which provides the current weather and a 5-day forecast.",
    gitLink: "https://github.com/gingus55/weather-dashboard",
    deployLink: "https://gingus55.github.io/weather-dashboard/",
  },
  {
    title: "Coding Quiz",
    image: codeQuizImage,
    description:
      "A short quiz on coding. Your high-score can be saved and you are against a timer.",
    gitLink: "https://github.com/gingus55/coding-quiz",
    deployLink: "https://gingus55.github.io/coding-quiz/",
  },
  {
    title: "Employee Tracker",
    image: empTraImage,
    description:
      "Terminal run application to track and update employee tables.",
    gitLink: "https://github.com/gingus55/employee-tracker",
  },
  {
    title: "Working Schedule",
    image: workSchedImage,
    description:
      "Terminal run application to track and update employee tables.",
    gitLink: "https://github.com/gingus55/working-schedule",
    deployLink: "https://gingus55.github.io/working-schedule/",
  },
];

const mainProject = {
  title: "Sound-Art-Smart",
  image: sasImage,
  description:
    "Given a user who knows nothing about art, they are able to gain some knowledge and discover their interest. Ending in their own personal gallery.",
  gitLink: "https://github.com/gingus55/sound-art-smart",
  deployLink: "https://gingus55.github.io/sound-art-smart/",
};

export const RightSide = () => {
  return (
    <Grid container spacing={0.5}>
      <ProjectCard project={mainProject} key={999} />
      <Grid item xs={12} md={6}>
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </Grid>
    </Grid>
  );
};

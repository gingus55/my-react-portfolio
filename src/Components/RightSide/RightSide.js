import { ProjectCard } from "../ProjectCard/ProjectCard";
import fitnessImage from "../../assets/images/fit-screenshot.png";

const projects = [
  {
    title: "Fitness App",
    image: fitnessImage,
    description:
      "An app to create and share your own workout routines. You can create a user account and edit your actions.",
    gitLink: "https://github.com/gingus55/fitness-app",
    deployLink: "https://fierce-lowlands-38129.herokuapp.com/",
  },
];
export const RightSide = () => {
  return (
    <>
      <div>This is the right side</div>;
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </>
  );
};

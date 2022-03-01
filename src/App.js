import { Route, Routes } from "react-router";
import { HomePage } from "./Pages/HomePage";
import { ContactPage } from "./Pages/ContactPage";
import { ProjectPage } from "./Pages/ProjectPage";
import { AboutPage } from "./Pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="projects" element={<ProjectPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;

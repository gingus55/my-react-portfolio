import { Route, Routes } from "react-router";
import { HomePage } from "./Pages/HomePage";
import { ContactPage } from "./Pages/ContactPage";
import { ProjectPage } from "./Pages/ProjectPage";
import { AboutPage } from "./Pages/AboutPage";

// import { Header } from "./Components/Header/Header";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/Projects" element={<ProjectPage />} />
      <Route path="/About" element={<AboutPage />} />
    </Routes>
  );
}

export default App;

import { Route, Router, Routes } from "react-router";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
// import { Header } from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

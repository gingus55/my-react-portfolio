import { Route, Routes } from "react-router";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
// import { Header } from "./Components/Header/Header";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;

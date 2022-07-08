import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectContainer from "./ProjectContainer.js";
import { Homepage } from "./Home.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { Skills } from "./Skills.js";
import { Contact } from "./Contact.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project" element={<ProjectContainer />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

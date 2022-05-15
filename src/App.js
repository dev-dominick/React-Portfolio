import { Routes, Route } from "react-router-dom";
import About from './components/aboutMe'
import Contact from './components/contactMe'
import Projects from './components/projects'
import Home from './components/home'

//import the nav bar component here

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;

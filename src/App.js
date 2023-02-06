import './App.css' 
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

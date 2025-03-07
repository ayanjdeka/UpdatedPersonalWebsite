import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Classes from "./components/Classes"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Classes />
      <Works />
      <Experience />
    </div>
  );
}
export default App;

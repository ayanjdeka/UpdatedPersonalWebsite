import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Classes from "./components/Classes"

const App = () => {
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
// const App = () => (
//    <div>
//       <h1>Hello world!!</h1>
//    </div>
// )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
import React from "react";
import Profile from "./Profile";
import About from "./about";
import Projects from "./projects";

function App() {
  return (
    <div className="main-container">
      <Profile />
      <Projects />
      <About />
    </div>
  );
}

export default App;

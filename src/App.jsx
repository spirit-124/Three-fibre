// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Contact, Projects, About, Home } from "./Pages";

const App = () => {
  return (
    <main className=" bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route exact path="/Navbar" element={<Navbar />} /> */}
        </Routes>
      </Router>
    </main>
  );
};

export default App;

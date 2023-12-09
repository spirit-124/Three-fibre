// import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Contact, Projects, About, Home } from "./Pages";

const App = () => {
  return (
    <main className=" bg-slate-300/20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/Navbar" element={<Navbar />} />
      </Routes>
    </main>
  );
};

export default App;

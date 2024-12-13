import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import "./App.scss";
import Header from "../Components/Header/Header";
import AboutMe from "../Pages/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About-me" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

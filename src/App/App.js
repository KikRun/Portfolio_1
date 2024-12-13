import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import "./App.scss";
import Header from "../Components/Header/Header";
import AboutMe from "../Pages/AboutMe/AboutMe";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About-me" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

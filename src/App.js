import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home'
import Project from './pages/Project';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

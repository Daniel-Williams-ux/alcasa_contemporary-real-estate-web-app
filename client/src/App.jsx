import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Reserve from './pages/Reserve';
import About from './pages/About';
import ExperienceO2 from './pages/ExperienceO2';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience-o2" element={<ExperienceO2 />} />
      </Routes>
    </Router>
  );
}

export default App;
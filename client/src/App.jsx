import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navigation from './components/Navigation';
import Layout from './components/Layout';
import Residences from './pages/Residences';
import Bespoke from './pages/Bespoke';
import About from './pages/About';
import ExperienceO2 from './pages/ExperienceO2';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Residences /></Layout>} />
        <Route path="/bespoke" element={<Layout><Bespoke /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/experience-o2" element={<Layout><ExperienceO2 /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
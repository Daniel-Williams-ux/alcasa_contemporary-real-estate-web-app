import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Residences from './pages/Residences';
import Bespoke from './pages/Bespoke';
import About from './pages/About';
import ExperienceO2 from './pages/ExperienceO2';
import Contact from './components/Contact';
import AccoladeCustomize from './components/AccoladeCustomize';
import AccoladeExplore from './components/AccoladeExplore';
import DawnExplore from './components/DawnExplore';
import DawnCustomize from './components/DawnCustomize';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/residences" element={<Layout><Residences /></Layout>} />
        <Route path="/bespoke" element={<Layout><Bespoke /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/experience-o2" element={<Layout><ExperienceO2 /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/customize" element={<Layout><AccoladeCustomize /></Layout>} />
        <Route path="/explore" element={<Layout><AccoladeExplore /></Layout>} />
        <Route path="/explore2" element={<Layout><DawnExplore /></Layout>} />
        <Route path="/customize2" element={<Layout><DawnCustomize /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
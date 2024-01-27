// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Layout from './components/Layout';
import Home from './pages/Home';
import Reserve from './pages/Reserve';
import About from './pages/About';
import ExperienceO2 from './pages/ExperienceO2';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/reserve"
          element={
            <Layout>
              <Reserve />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/experience-o2"
          element={
            <Layout>
              <ExperienceO2 />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

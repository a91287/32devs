// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/32devs/build/index.html" element={<Home />} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

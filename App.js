// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import OtherPage from './components/OtherPage';
import MainMenuButton from './components/MainMenuButton';


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li><MainMenuButton /></li>
            <li><Link to="/other">Other Page</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/other" element={<OtherPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

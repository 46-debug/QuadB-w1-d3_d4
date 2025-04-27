import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Weather from './Weather';
import "./app.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather/:city" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


import './App.css';
import Controlador from './controlador/Controlador';
import Historial from './components/Historial';
import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
  <div className="App"  style={{ width: '100vw', height: '100vh' }}>
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/mapas" className="nav-link">Mapas</Link>
            </li>
            <li className="nav-item">
              <Link to="/historial" className="nav-link">Historial</Link>
            </li>
          </ul>
        </div>
      </nav>
      <h1>Bienvenido</h1>

      <Routes>
        <Route path="/mapas" element={<Controlador />} />
        <Route path="/historial" element={<Historial />} />
      </Routes>
    </Router>
   
  </div>
  );
}

export default App;

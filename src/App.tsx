import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/About';
import AppRoutes from './components/AppRoutes';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <HashRouter>
      <Header />
      <Home />
      <About />
      <Contact />
      <AppRoutes />
    </HashRouter>
  );
}

export default App;

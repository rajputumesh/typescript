import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import AppRoutes from './Routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

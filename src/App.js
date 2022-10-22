import React from 'react';
import { Hero, Navbar, Statistics, Footer } from './components';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Statistics />
      <Footer />
    </div>
  );
};

export default App;

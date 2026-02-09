import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Transformations from './components/Transformations';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Achievements />
      <Transformations />
    </div>
  );
}

export default App;

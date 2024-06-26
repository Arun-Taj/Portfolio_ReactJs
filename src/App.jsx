// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="">
      <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Experience/>
        <Contact/>
      <SocialLinks />
      
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Header  from './components/header.js';
import  Footer  from './components/footer.js';
import HeroSection from './components/herosection.js';

function App() {
  return (
    <div>
      <Header/>
      <Footer/>
      <HeroSection/>
    </div>
  );
}

export default App;

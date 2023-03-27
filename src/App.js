import './App.css';
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <body className='App'> 

    <div className='header'>
      <Header  />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/About" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
</body>
  );
}

export default App;

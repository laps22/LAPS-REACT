import './App.css';
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (

    <div className='App'>
      <Header className='header' />
      <Router>
        <Navigation />
        <Portfolio />
        <div>
          <Route path="/About" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </div>
      </Router>
      <Footer />
    </div>

  );
}

export default App;

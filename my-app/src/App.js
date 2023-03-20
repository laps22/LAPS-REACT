import React from 'react';
import Header from './components/Header';
import logo from './logo.svg';
import './App.css';
import ProjectCard from './components/Portfolio';
// import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Header />
      </header>
      <ProjectCard />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;

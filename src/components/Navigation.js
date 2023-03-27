import React from 'react';
import { a } from "react-router-dom";
import '../styles/Navigation.css';


// const styles = {
//     card: {
//       margin: 20,
//       background: '#f5cac3',
//     },
//     heading: {
//       background: '#f5cac3',
//       minHeight: 50,
//       lineHeight: 3.5,
//       fontSize: '1.2rem',
//       color: 'white',
//       padding: '0 20px',
//       listStyle: 'none',
//     },

//   };

function Navigation() {
  return (
    <nav>
      <a href="/">About Me</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/contact">Contact</a>
      <a href="/resume">Resume</a>
    </nav>
  );
}

export default Navigation;
import React from 'react';
import { Link } from "react-router-dom";
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
      <Link to="/about">About Me</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </nav>
  );
}

export default Navigation;
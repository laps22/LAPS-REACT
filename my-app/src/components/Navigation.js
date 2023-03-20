import React from 'react';
import { NavLink } from 'react-router-dom';
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
      <NavLink to="/about">About Me</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </nav>
  );
}

export default Navigation;
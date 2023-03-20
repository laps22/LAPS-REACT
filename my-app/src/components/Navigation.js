import React from 'react';


// const styles = {
//     // card: {
//     //   margin: 20,
//     //   background: '#f5cac3',
//     // },
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
            <ul>
                <li><a href="/">About Me</a></li>
                <li><a href="/about">Portfolio</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/resume">Resume</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;
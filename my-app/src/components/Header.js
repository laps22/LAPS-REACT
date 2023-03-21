import React from 'react';
import LAPS from '../assets/LAPS.svg'
import '../styles/Navigation.css';


function Header() {
    return (
        <header>
        <img src={LAPS} alt="logo" />
        </header>
    );
}

export default Header;
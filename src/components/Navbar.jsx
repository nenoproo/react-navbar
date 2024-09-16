import React from 'react';
import './Navbar.css';
import logo from '../assets/images/logo.png';
import macedonian from '../assets/images/mk.svg';
import english from '../assets/images/gb.svg';

const Navbar = () => {

    return (
        <header class="header">
            <div className="logo">
                <a href="#">
                    <img src={logo} />
                </a>
            </div>

            <div className="nav-lang-wrapper">
                <nav className="navbar">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Downloads</a>
                    <a href="#">Contact</a>
                </nav>

                <div className="language-selector">
                    <a href="#">
                        <img src={macedonian} alt="Macedonian" />
                    </a>
                    <a href="#">
                        <img src={english} alt="English" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import "./Header.css";

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -140; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

function Header() {
    return (
        <header>
            <div className="header-outer">
                <div className="header-inner">
                    <NavLink className='logo' to="/"></NavLink>

                    <nav className="nav-bar mobile">
                        <div id="menuToggle">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul id="mobile-menu">
                                <li><AnchorLink className='nav-link' href="#carousel">Home</AnchorLink></li>
                                <li><AnchorLink className='nav-link' href="#exhibitions-container">Exhibitions</AnchorLink></li>
                                <li><AnchorLink className='nav-link' href="#footer-container">Contacts</AnchorLink></li>
                                <li><NavLink className='nav-link' to="/Login"><i className="fa-regular fa-circle-user"></i>Login</NavLink></li>
                            </ul>
                        </div>
                    </nav>

                    <nav className='nav-bar desktop'>
                        <HashLink className='nav-link' to="/home#carousel" smooth scroll={el => scrollWithOffset(el)}>Home</HashLink>
                        <HashLink className='nav-link' to="/home#exhibitions-container" smooth scroll={el => scrollWithOffset(el)}>Exhibitions</HashLink>
                        <AnchorLink className='nav-link' href="#footer-container">Contact</AnchorLink>
                    </nav>

                    <div className='login'>
                        <div className="login-icon"><i className="fa-regular fa-circle-user"></i></div>
                        <NavLink to="/Login">Login</NavLink>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;
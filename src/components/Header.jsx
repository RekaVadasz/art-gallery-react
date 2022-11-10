import React from 'react';
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import "./Header.css"

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
                                <li><NavLink className='nav-link' to="/">Home</NavLink></li>
                                <li><AnchorLink className='nav-link' href="#exhibitions-container">Exhibitions</AnchorLink></li>
                                <li><AnchorLink className='nav-link' href="#footer-container">Contacts</AnchorLink></li>
                                <li><NavLink className='nav-link' to="/Login"><i className="fa-regular fa-circle-user"></i>Login</NavLink></li>
                            </ul>
                        </div>
                    </nav>

                    <nav className='nav-bar desktop'>
                        <NavLink className='nav-link' to="/">Home</NavLink>
                        <AnchorLink className='nav-link' href="#exhibitions-container">Exhibitions</AnchorLink>
                        <AnchorLink className='nav-link' href="#footer-container">Contacts</AnchorLink>
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
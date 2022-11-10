import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"
// import { HashLink as HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Header() {
  return (
    <header>
{/* 
        <nav className='nav-bar'>
            <NavLink className='nav-link' to="/">Home</NavLink>
            <NavLink className='nav-link' to="/exhibitions">Exhibitions</NavLink>

            <NavLink className='nav-link' to="/ExhibitionCollection">ExhibitionCollection</NavLink>
            
            <NavLink className='nav-link' to="/Contacts">Contacts</NavLink>
        </nav>
 */}
        <div className="header-outer">
          <div className="header-inner">
          <NavLink className='logo' to="/"></NavLink>
       {/*    
          <div className="logo">
            <a href="/">
              <h1>Gagarin Online Art Gallery</h1>
            </a>
            </div>
             */}
            <nav className="nav-bar mobile">
            <div id="menuToggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
              <ul id="mobile-menu">
                <li><NavLink className='nav-link' to="/">Home</NavLink></li>
                <li><AnchorLink className='nav-link' href="#exhibitions-container">Exhibitions</AnchorLink></li>
{/*                 <li><NavLink className='nav-link' to="/ExhibitionCollection">ExhibitionCollection</NavLink></li> */}
                {/* <li><NavLink className='nav-link' to="/Contacts">Contacts</NavLink></li> */}
                <li><AnchorLink className='nav-link' href="#footer-container">Contacts</AnchorLink></li>

                <li><NavLink className='nav-link' to="/Login"><i className="fa-regular fa-circle-user"></i>Login</NavLink></li>

               

              </ul>
            </div>
           </nav>

            <nav className='nav-bar desktop'>
                <NavLink className='nav-link' to="/">Home</NavLink>
                <AnchorLink className='nav-link' href="#exhibitions-container">Exhibitions</AnchorLink>
                {/* <NavLink className='nav-link' to="/Home/#exhibitions-container">Exhibitions</NavLink> */}
                <AnchorLink className='nav-link' href="#footer-container">Contacts</AnchorLink>
                {/* <NavLink className='nav-link' to="/Contacts">Contacts</NavLink> */}
            </nav>

            <div className='login'>
              <div className="login-icon"><i className="fa-regular fa-circle-user"></i></div>
            <NavLink to="/Login">Login</NavLink></div>

           {/* <div className='login'><div className='loginImage'><img src="http://localhost:3000/login.png"></img></div>
            <a href="#">Login</a></div> */}

            </div>
        </div>
        
    </header>
  )
}

export default Header;
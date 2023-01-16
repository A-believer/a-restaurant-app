import React, { useState } from 'react';
import {images} from "../../constants"
import {GiHamburgerMenu} from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import './Navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (<nav className='app__navbar'>
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="logo" className="app__logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#menu">Menu</a></li>
      <li className="p__opensans"><a href="#awards">Awards</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href="#log-in" className="p__opensans">Log In / Registration</a>
      <div />
      <a href="book-table" className="p__opensans">Book Table</a>
    </div>

    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu fontSize={27} color='#fff' onClick={() => setToggle(true)} />
      {toggle && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} color="#fff" className="overlay__close" onClick={() => setToggle(false)} />
          <ul className='app__navbar-smallscreen_links'>
            <li className="p__opensans" onClick={() => setToggle(false)}><a href="#home">Home</a></li>
            <li className="p__opensans" onClick={() => setToggle(false)}><a href="#about">About</a></li>
            <li className="p__opensans" onClick={() => setToggle(false)}><a href="#menu">Menu</a></li>
            <li className="p__opensans" onClick={() => setToggle(false)}><a href="#awards">Awards</a></li>
            <li className="p__opensans" onClick={() => setToggle(false)}><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  </nav>
)};

export default Navbar;

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false)
  const toogleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky ? 'darkNav' : ''}`}>
      <img src={logo} alt="Logo" className="logo"/>
      <ul className={mobileMenu? "":"hideMenu"}>
        <li>
          <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        <li>
          <Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link>
        </li>
        <li>
          <Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link>
        </li>
        <li>
          <Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link>
        </li>
        <li>
          <Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link>
        </li>
        <li>
          <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link>
        </li>
      </ul>
      <img src={menuIcon} className='menuIcon' onClick={toogleMenu}/>
    </nav>
  )
}

export default Navbar
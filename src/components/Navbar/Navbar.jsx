import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
import logoImg from "../../images/icons8-book-64.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleNavbar = () => setToggleMenu(!toggleMenu);
  
    return (
        
      <nav className='navbar' id = "navbar">

        <div className='container navbar-content flex'>
          <div className='brand-and-toggler flex flex-sb'>
            <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>Bibliophile</span>
            
              
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "/" className='nav-link text-uppercase  fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/category" className='nav-link text-uppercase  fs-22 fw-6 ls-1'>Category</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/collections" className='nav-link text-uppercase  fs-22 fw-6 ls-1'>Collections</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/contact Us" className='nav-link text-uppercase  fs-22 fw-6 ls-1'>Contact Us</Link>
            </li>
            <li className='nav-item'>
              <Link to = "Sign Up" className='nav-link text-uppercase  fs-22 fw-6 ls-1'>Sign Up</Link>
            </li>
            
           
            
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
            
            
    
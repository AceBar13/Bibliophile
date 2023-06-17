import React, {useContext, useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css"
import logoImg from "../../images/icons8-book-64.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import { AuthContext } from '../../auth';
import { auth } from "../../fire"
import { signOut } from "firebase/auth"

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate = useNavigate();
    const {currentUser} = useContext(AuthContext);

    const handleNavbar = () => setToggleMenu(!toggleMenu);


    const logOut = ()=>{
      signOut(auth).then(()=>{
          navigate('/signIn');
           console.log('singout')
      }).catch((error)=>{

      })
  }
    
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
              <Link to = '/' className='nav-link text-uppercase  fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = '/category' className='nav-link text-uppercase fs-22 fw-6 ls-1'>Cart</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/collections" className='nav-link text-uppercase  fs-22 fw-6 ls-1'>Inventory</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/contactus " className='nav-link text-uppercase  fs-22 fw-6 ls-1'>Contactus</Link>
            </li>
            
            {currentUser===null ? (
              <div>
        <li className='nav-item'>
        <Link to = "Signup" className='nav-link text-uppercase  fs-22 fw-6 ls-1'>SignIn</Link>
      </li>
      </div>
      ) : (
        <div>
        <li className='nav-item'>
          <button type='button' onClick={logOut} className='log-btn'>Log Out</button>
      </li>
      </div>
      )}
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
            
            
    
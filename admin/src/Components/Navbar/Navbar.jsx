import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
         <p><b>LA</b></p>
            <img src={logo} alt="La Organic Store Logo" />
            <p><b>Organic Store</b></p>
            </div>
        <h1>Admin Panel</h1>
        <img src={profile} alt="" className='nav-profile'/>

    </div>
  )
}

export default Navbar
import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png';
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt=""  className='nav-logo'/>
        <h1>Admin Panel</h1>
        <img src={profile} alt="" className='nav-profile'/>

    </div>
  )
}

export default Navbar
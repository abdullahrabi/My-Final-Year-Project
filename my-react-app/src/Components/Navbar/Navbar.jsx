import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import login_icon from '../Assests/login_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import SearchBar from '../SearchBar/SearchBar'


const Navbar = () => {
  
    const[menu,setMenu]= useState("All Categories");
    const{getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
    <div className='navbar-top'>
      <div className='navbar-logo'>
        <p><b>LA</b></p>
        <img src={logo} alt="La Organic Store Logo" />
        <p><b>Organic Store</b></p>
      </div>
    <SearchBar/>
      <div className='nav-login-cart'>
        <Link to='/login'>
          <img src={login_icon} alt="Login Icon" />
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
<div className='navbar-bottom'>
    <ul className='nav-menu'>
         <li onClick={()=>{setMenu("Home")}}><Link style={{color:'inherit',textDecoration:'none'}}to ='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("Grocery")}}><Link style={{color:'inherit',textDecoration:'none'}}to ='/Grocery'>Grocery</Link>{menu==="Grocery"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("Electronics")}}><Link style={{color:'inherit',textDecoration:'none'}}to ='/Electronics'>Electronics</Link>{menu==="Electronics"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("Perfume")}}><Link style={{color:'inherit',textDecoration:'none'}}to ='/Perfume'>Perfume</Link>{menu==="Perfume"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("Makeup")}}><Link style={{color:'inherit',textDecoration:'none'}}to ='/Makeup'>Makeup</Link>{menu==="Makeup"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("Skincare")}}><Link style={{color:'inherit',textDecoration:'none'}}to ='/Skincare'>Skincare</Link>{menu==="Skincare"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("Fruits_Vegetables")}}><Link style={{color:'inherit',textDecoration:'none'}}to ='/Fruits_Vegetables'>Fruits & Vegetables</Link>{menu==="Fruits_Vegetables"?<hr/>:<></>}</li>
        </ul>
      
        </div>
    </div>
  )
}

export default Navbar
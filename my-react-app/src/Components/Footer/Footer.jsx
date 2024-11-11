import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/footer_logo.png'
import scoial_logo from '../Assests/Social Media.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <div className="footer-logo-text">
          <h3>LA</h3>
          <img src={footer_logo}/> 
          <h4>ORGANIC</h4>
          <h4>STORE</h4>
         </div>
      
        
      </div>

      <div className="footer-links">
        <ul>
          <Link  style={{color:'inherit',textDecoration:'none'}}to ='/Home'><li>All Categories</li></Link>
          <Link  style={{color:'inherit',textDecoration:'none'}} to ='Grocery'> <li>Grocery</li></Link>
          <Link  style={{color:'inherit',textDecoration:'none'}}to ='Electronics'> <li>Electronics</li></Link>
          <Link  style={{color:'inherit',textDecoration:'none'}}to ='Perfume'> <li>Perfume</li></Link>
          <Link  style={{color:'inherit',textDecoration:'none'}}to ='Makeup'><li>Makeup</li></Link>
          <Link  style={{color:'inherit',textDecoration:'none'}}to ='Skincare'> <li>Skincare</li></Link>
       
        
         
        </ul>
        <ul>
          <li>Customer Service</li>
          <Link  style={{color:'inherit',textDecoration:'none'}}to='/login'><li>My Account</li></Link>
          <li>Contact US</li>
          <li>Cash On Delivery Service</li>
          <li>Terms & Condition</li>
          <li>Shipping Policy</li>
        </ul>
      </div>

     
    </div>
   
    <img src= {scoial_logo}/>
  
    
    <div className="footer-bottom">
      <p>© 2024, La Organic Store All Rights Reserved - Powered By Developer Studio</p>
    </div>
  </footer>
);
};

export default Footer;
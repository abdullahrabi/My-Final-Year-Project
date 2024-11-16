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
          <Link   className='link1' to ='/Fruits_Vegetables'><li>Fruits & Vegetables</li></Link>
          <Link   className='link2' to ='Grocery'> <li>Grocery</li></Link>
          <Link   className='link3' to ='Electronics'> <li>Electronics</li></Link>
          <Link   className='link4' to ='Perfume'> <li>Perfume</li></Link>
          <Link   className='link5' to ='Makeup'><li>Makeup</li></Link>
          <Link   className='link6' to ='Skincare'> <li>Skincare</li></Link>
       </ul>
        <ul>
          <li>Customer Service</li>
          <Link   className='link7'  to='/login'><li>My Account</li></Link>
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
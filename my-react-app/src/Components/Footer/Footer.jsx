import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/footer_logo.png'
import facebook from '../Assests/facebook1.png'
import instgram from '../Assests/instgram.png'
import x from '../Assests/x.png'
import youtube from '../Assests/youtube.jpeg'
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
          <li>OUR BRANCHES</li>
          <li>LAHORE</li>
          <li>KARACHI</li>
          <li>FAISALABAD</li>
          <li>MULTAN</li>
          <li>RAWALPINDI</li>
        </ul>
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
   <div className='social-media'>
    <h3>FOLLOW US ON</h3>
    <img src= {facebook}/>
    <img src={instgram} alt="" />
    <img src={x} alt="" />
    <img src={youtube} alt="" />
  
    </div>
    <div className="footer-bottom">
      <p>© 2024, La Organic Store All Rights Reserved - Powered By Developer Studio</p>
    </div>
  </footer>
);
};

export default Footer;
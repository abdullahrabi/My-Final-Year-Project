import React from 'react' 
import Hero from '../Components/Hero/Hero'
import { Link } from 'react-router-dom'
import './CSS/Home.css'
import grocery from '../Components/Assests/grocery.png'
import Electronics from '../Components/Assests/Electronics.png'
import Skincare from '../Components/Assests/Skincare.png'
import Perfume from '../Components/Assests/Perfume.png'
import Makeup from '../Components/Assests/Makeup.png'
import Fruits from '../Components/Assests/Fruits.jpg'
import Popular from '../Components/Popular/Popular'
import per from '../Components/Assests/per.png'
import make from '../Components/Assests/make.png'
import skin from '../Components/Assests/skin.png'
import home from '../Components/Assests/home.png'
import The_Latest from '../Components/The_Latest/The_Latest'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const  Home = () => {
  return (
    <div>
        
        <Hero/>
       
        <div className='menu'>
        <Link className='Link1' to='/Grocery'>
          <img src={grocery} alt="Grocery Icon" />
          <h3>Grocery</h3>
        </Link>
        <Link className='Link2' to='/Electronics'>
          <img src={Electronics} alt="Electronics Icon" />
          <h3>Electronics</h3>
        </Link>
        <Link className='Link3' to='/Skincare'>
          <img src={Skincare} alt="Skincare Icon" />
          <h3>Skincare</h3>
        </Link>
       </div>
       <div className='menu-bottom'>
        <Link className='Link4' to='/Perfume'>
          <img src={Perfume} alt="Perfume Icon" />
          <h3>Perfume</h3>
        </Link>
        <Link className='Link5' to='/Makeup'>
          <img src={Makeup} alt="Makeup Icon" />
          <h3>Makeup</h3>
        </Link>
        <Link className='Link6' to='/Fruits_Vegetables'>
          <img src={Fruits} alt="Fruits & Vegetables Icon" />
          <h3>Fruits & Vegetables</h3>
        </Link>
        </div>
        <div className='List-Items'>
        <Link className='Link7' to='/Fruits_Vegetables'>
        </Link>
        </div>
      <Popular/>
     
     <div className='menu-2'>
     <Link to='/Perfume'>
          <img src={per} alt="Perfume Icon" />
      </Link>
      <Link className='Link8' to='/Makeup'>
          <img src={make} alt="Makeup Icon" />
      </Link>
    
     <Link  className='Link9' to='/Skincare'>
          <img src={skin} alt="Skincare Icon" />
      </Link>
      <Link  className='Link10' to='/Electronics'>
          <img src={home} alt="Electronics Icon" />
      </Link>
      </div>
      <The_Latest/>
      <NewsLetter/>
     
     </div>
   
    
    
  )
}

export default  Home
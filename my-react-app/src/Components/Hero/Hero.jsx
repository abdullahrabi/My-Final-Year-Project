import React from 'react'
import './Hero.css'
import hero_icon from '../Assests/hero_icon.jpg'
import Perfumes from '../Assests/Perfumes.png'
import Skincare from '../Assests/Skincare1.png'
import { Link } from 'react-router-dom'
import sale from '../Assests/sale.png'
import grocery from '../Assests/grocery.png'
import  { useState, useEffect } from 'react';
import Slideshow from '../Slideshow/Slideshow';

const slides = [
  { image: hero_icon, link: '/Fruits' },
  { image: Perfumes, link: '/Perfumes' },
  { image: Skincare, link: '/Skinacare' },
];


const Hero = () => {
  

return (
    <div>
     <Slideshow slides={slides} />
    </div>
  );
};

export default Hero;
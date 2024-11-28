import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Home.css';
import grocery from '../Components/Assests/grocery.png';
import Electronics from '../Components/Assests/Electronics.png';
import Skincare from '../Components/Assests/Skincare.png';
import Perfume from '../Components/Assests/Perfume.png';
import Makeup from '../Components/Assests/Makeup.png';
import Fruits from '../Components/Assests/Fruits.jpg';
import Popular from '../Components/Popular/Popular';
import per from '../Components/Assests/per.png';
import make from '../Components/Assests/make.png';
import skin from '../Components/Assests/skin.png';
import home from '../Components/Assests/home.png';
import The_Latest from '../Components/The_Latest/The_Latest';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Hero from '../Components/Hero/Hero'
// Import React Spring
import { useSpring, animated } from '@react-spring/web'; // React Spring for animations

const Home = () => {
  // Animation for each section (fade up)
  const slideInFromBottom1 = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' }, // Starting point: below the screen
    to: { opacity: 1, transform: 'translateY(0)' },     // Final point: placed in the original position
    config: { tension: 280, friction: 80 },
    delay: 800,   // Delay for menu-1
  });

  const slideInFromBottom2 = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 80 },
    delay: 2000,   // Delay for Popular
  });

  const slideInFromBottom3 = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 80 },
    delay: 3200,   // Delay for menu-2
  });

  const slideInFromBottom4 = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 80 },
    delay: 4400,   // Delay for The_Latest
  });

  const slideInFromBottom5 = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 80 },
    delay: 5600,  // Delay for Newsletter
  });

  return (
    <div>
      <Hero />  {/* Keeping Hero as is */}

      {/* Animating sections with individual springs */}
      <animated.div style={slideInFromBottom1}>
        <div className='menu-1'>
          <Link className='Link1' to='/Grocery'>
            <img src={grocery} alt="Grocery Icon" />
            <h4>Grocery</h4>
          </Link>
          <Link className='Link2' to='/Electronics'>
            <img src={Electronics} alt="Electronics Icon" />
            <h4>Electronics</h4>
          </Link>
          <Link className='Link3' to='/Skincare'>
            <img src={Skincare} alt="Skincare Icon" />
            <h4>Skincare</h4>
          </Link>
          <Link className='Link4' to='/Perfume'>
            <img src={Perfume} alt="Perfume Icon" />
            <h4>Perfume</h4>
          </Link>
          <Link className='Link5' to='/Makeup'>
            <img src={Makeup} alt="Makeup Icon" />
            <h4>Makeup</h4>
          </Link>
          <Link className='Link6' to='/Fruits_Vegetables'>
            <img src={Fruits} alt="Fruits & Vegetables Icon" />
            <h4>Fruits & Vegetables</h4>
          </Link>
        </div>
      </animated.div>

      <animated.div style={slideInFromBottom2}>
        <Popular />
      </animated.div>

      <animated.div style={slideInFromBottom3}>
        <div className='menu-2'>
          <Link to='/Perfume'>
            <img src={per} alt="Perfume Icon" />
          </Link>
          <Link className='Link8' to='/Makeup'>
            <img src={make} alt="Makeup Icon" />
          </Link>
          <Link className='Link9' to='/Skincare'>
            <img src={skin} alt="Skincare Icon" />
          </Link>
          <Link className='Link10' to='/Electronics'>
            <img src={home} alt="Electronics Icon" />
          </Link>
        </div>
      </animated.div>

      <animated.div style={slideInFromBottom4}>
        <The_Latest />
      </animated.div>

      <animated.div style={slideInFromBottom5}>
        <NewsLetter />
      </animated.div>
    </div>
  );
};

export default Home;

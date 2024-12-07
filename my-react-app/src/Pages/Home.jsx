import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web'; // React Spring for animations
import { useInView } from 'react-intersection-observer'; // For detecting scroll into view
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
import Hero from '../Components/Hero/Hero';

const Home = () => {
  // Create a helper function to manage scroll-triggered animations
  const useScrollAnimation = (delay) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    
    const animationProps = useSpring({
      from: { opacity: 0, transform: 'translateY(50px)' },
      to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(50px)' },
      config: { tension: 800, friction: 60 },
      delay: delay,
    });

    return [ref, animationProps];
  };

  // Apply scroll animations with delays to each section
  const [menu1Ref, menu1Spring] = useScrollAnimation(300);
  const [popularRef, popularSpring] = useScrollAnimation(500);
  const [menu2Ref, menu2Spring] = useScrollAnimation(700);
  const [latestRef, latestSpring] = useScrollAnimation(900);
  const [newsletterRef, newsletterSpring] = useScrollAnimation(1100);
  

  return (
    <div>
      <Hero /> {/* Keeping Hero as is */}

      {/* Menu 1 with scroll animation */}
      <animated.div style={menu1Spring} ref={menu1Ref}>
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

      {/* Popular Section with scroll animation */}
      <animated.div style={popularSpring} ref={popularRef}>
        <Popular />
      </animated.div>

      {/* Menu 2 with scroll animation */}
      <animated.div style={menu2Spring} ref={menu2Ref}>
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

      {/* The Latest Section with scroll animation */}
      <animated.div style={latestSpring} ref={latestRef}>
        <The_Latest />
      </animated.div>

      {/* Newsletter Section with scroll animation */}
      <animated.div style={newsletterSpring} ref={newsletterRef}>
        <NewsLetter />
      </animated.div>
      
     
  
    </div>
  );
};

export default Home;

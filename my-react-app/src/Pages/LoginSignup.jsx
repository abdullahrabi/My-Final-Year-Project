import React, { useState } from 'react';
import './CSS/LoginSignup.css'; // Your custom CSS
import { useSpring, animated } from '@react-spring/web'; // React Spring for animations
import login_icon from '../Components/Assests/Login.jpg';
import google_icon from '../Components/Assests/google.jpg';

const LoginSignup = () => {
  const [isSwapped, setIsSwapped] = useState(false);

  // Toggle function for swapping
  const handleToggle = () => {
    setIsSwapped(!isSwapped);
  };

  // Spring animation for the left section (login/signup form)
  const leftAnimation = useSpring({
    transform: isSwapped ? 'translateX(100%)' : 'translateX(0%)',
    opacity: isSwapped ? 0.8 : 1, // Optional opacity change during swap
    config: { tension: 1000, friction: 60 }, // Adjust speed and smoothness
  });

  // Spring animation for the right section (image)
  const rightAnimation = useSpring({
    transform: isSwapped ? 'translateX(-100%)' : 'translateX(0%)',
    opacity: isSwapped ? 0.8 : 1, // Optional opacity change during swap
    config: { tension: 1000, friction: 60 }, // Adjust speed and smoothness
  });

  return (
    <div className="loginsignup-page">
      {/* Left Section (Login/Signup form) with React Spring animation */}
      <animated.div className="loginsignup-left" style={leftAnimation}>
        <div className="loginsignup-container">
          <h1>{isSwapped ? 'Sign Up' : 'Login'}</h1>
          <div className="loginsignup-fields">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            {isSwapped && (
              <>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Confirm Password" />
              </>
            )}
          </div>
          <div className="loginsignup-remember">
            <input type="checkbox" />
            <label>Remember me</label>
            <a href="#">Forgot your password?</a>
          </div>
          <button className="login-button">{isSwapped ? 'Sign Up' : 'Login'}</button>
          <button className="toggle-button" onClick={handleToggle}>
            {isSwapped ? 'Already have an account? Login here' : 'Don’t have an account? Sign up here'}
          </button>
            <h3>OR</h3>
            <form className="google-form">
            <img src={google_icon} alt="Google login"  />
            <button type="submit" className="google-button">Continue with Google</button>
          </form>
         
        </div>
      </animated.div>

      {/* Right Section (Image) with React Spring animation */}
      <animated.div className="loginsignup-right" style={rightAnimation}>
        <img src={login_icon} alt="Welcome" />
      </animated.div>
    </div>
  );
};

export default LoginSignup;

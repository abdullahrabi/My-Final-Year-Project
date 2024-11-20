import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import loginImage from '../Components/Assests/Login.jpg'; 
import google from '../Components/Assests/google.jpg'; 
import { useSpring, animated } from '@react-spring/web';
const LoginSignup = () => {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleToggle = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <span className={`loginsignup-page ${isSwapped ? 'swapped' : ''}`}>
      <span className="loginsignup-left">
        <span className="loginsignup-container">
          <h1>{isSwapped ? 'Sign Up' : 'Login'}</h1>
          <span className="loginsignup-fields">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            {isSwapped && (
              <>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Confirm Password" />
              </>
            )}
          </span>
          <span className='loginsignup-remember'>
            <input type="checkbox" />
            <label>Remember me</label>
            <a href="#">Forgot your password?</a>
          </span>
          <button className="login-button">{isSwapped ? 'Sign Up' : 'Login'}</button>
          <button className="toggle-button" onClick={handleToggle}>
        {isSwapped ? 'Already have an account? Login here' : 'Don’t have an account? Sign up here'}
      </button>
          <p className="loginsignup-or">OR</p>
          <span className="social-login">
            <a href="#"><img src={google} alt="Google login" /><i className="fab fa-google"></i></a>
          </span>
        </span>
      </span>

      <span className="loginsignup-right">
        <img src={loginImage} alt="Our Store Welcome Page" />
      </span>

    
    </span>
  );
};

export default LoginSignup;

import React, { useState } from 'react';
import './CSS/LoginSignup.css'; // Your custom CSS
import { useSpring, animated } from '@react-spring/web'; // React Spring for animations
import login_icon from '../Components/Assests/Login.jpg';
import google_icon from '../Components/Assests/google.jpg';
import eye_icon from '../Components/Assests/eye_icon.png'; // Your custom eye icon
import eye_off_icon from '../Components/Assests/eye_off_icon.png'; // Your custom eye-off icon

const PasswordInput = ({ placeholder }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="password-input-container" style={{ position: 'relative' }}>
      <input
        type={passwordVisible ? 'text' : 'password'}
        placeholder={placeholder}
        required
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="eye-icon-button"
      >
        <img 
          src={passwordVisible ? eye_icon : eye_off_icon} 
          alt="Toggle visibility" 
        />
      </button>
    </div>
  );
};

const LoginForm = ({ onToggle }) => {
  // Handler for form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Logic for backend API integration for login
    console.log('Login form submitted');
  };

  return (
    <form className="loginsignup-container" onSubmit={handleLoginSubmit}>
      <h1>Login</h1>
      <div className="loginsignup-fields">
        <input type="email" placeholder="Email" required />
        <PasswordInput placeholder="Password" />
      </div>
      <div className="loginsignup-remember">
        <input type="checkbox" />
        <label>Remember me</label>
        <a href="#">Forgot your password?</a>
      </div>
      <button type="submit" className="login-button">Login</button>
      <button className="toggle-button" onClick={onToggle}>
        Don’t have an account? Sign up here
      </button>
      <h3>OR</h3>
      <div className="google-form">
        <img src={google_icon} alt="Google login" />
        <button type="button" className="google-button">Continue with Google</button>
      </div>
     </form>
  );
};

const SignupForm = ({ onToggle }) => {
  // Handler for form submission
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Logic for backend API integration for signup
    console.log('Signup form submitted');
  };

  return (
    <form className="loginsignup-container" onSubmit={handleSignupSubmit}>
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="email" placeholder="Email" required />
        <PasswordInput placeholder="Password" />
        <input type="text" placeholder="Username" required />
      </div>
      <button type="submit" className="login-button">Sign Up</button>
      <button className="toggle-button" onClick={onToggle}>
        Already have an account? Login here
      </button>
      <h3>OR</h3>
      <div className="google-form">
        <img src={google_icon} alt="Google signup" />
        <button type="button" className="google-button">Continue with Google</button>
      </div>
     
     
    </form>
  );
};

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
        {isSwapped ? <SignupForm onToggle={handleToggle} /> : <LoginForm onToggle={handleToggle} />}
      </animated.div>

      {/* Right Section (Image) with React Spring animation */}
      <animated.div className="loginsignup-right" style={rightAnimation}>
        <img src={login_icon} alt="Welcome" />
      </animated.div>
    </div>
  );
};

export default LoginSignup;

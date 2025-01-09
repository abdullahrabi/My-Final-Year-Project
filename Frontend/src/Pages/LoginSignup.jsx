import React, { useState } from 'react';
import './CSS/LoginSignup.css'; // Your custom CSS
import { useSpring, animated } from '@react-spring/web'; // React Spring for animations
import login_icon from '../Components/Assests/Login.jpg';
import google_icon from '../Components/Assests/google.jpg';
import eye_icon from '../Components/Assests/eye_icon.png'; // Your custom eye icon
import eye_off_icon from '../Components/Assests/eye_off_icon.png'; // Your custom eye-off icon
import axios from 'axios';
import { toast } from 'react-toastify';  
import { useNavigate } from 'react-router-dom';

const PasswordInput = ({ placeholder, onChange }) => {
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
        onChange={onChange}
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      toast.success("Login Successfully");
      navigate('/');  // Redirect to homepage after login
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <form className="loginsignup-container" onSubmit={handleLoginSubmit}>
      <h1>Login</h1>
      <div className="loginsignup-fields">
        <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
        <PasswordInput placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { name: username, email, password });
      toast.success(response.data.message);
      navigate('/login');  // Redirect to login page after signup
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <form className="loginsignup-container" onSubmit={handleSignupSubmit}>
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <PasswordInput placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
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

  const handleToggle = () => {
    setIsSwapped(!isSwapped);
  };

  const leftAnimation = useSpring({
    transform: isSwapped ? 'translateX(100%)' : 'translateX(0%)',
    opacity: isSwapped ? 0.8 : 1,
    config: { tension: 1000, friction: 60 },
  });

  const rightAnimation = useSpring({
    transform: isSwapped ? 'translateX(-100%)' : 'translateX(0%)',
    opacity: isSwapped ? 0.8 : 1,
    config: { tension: 1000, friction: 60 },
  });

  return (
    <div className="loginsignup-page">
      <animated.div className="loginsignup-left" style={leftAnimation}>
        {isSwapped ? <SignupForm onToggle={handleToggle} /> : <LoginForm onToggle={handleToggle} />}
      </animated.div>

      <animated.div className="loginsignup-right" style={rightAnimation}>
        <img src={login_icon} alt="Welcome" />
      </animated.div>
    </div>
  );
};

export default LoginSignup;

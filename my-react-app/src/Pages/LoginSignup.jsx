import React from 'react';
import './CSS/LoginSignup.css';
import loginImage from '../Components/Assests/Login.jpg'; 
import google from '../Components/Assests/google.jpg'; 
const LoginSignup = () => {
  return (
    <div className="loginsignup-page">
     
      <span className="loginsignup-left">
        <span className="loginsignup-container">
          <h1>Login</h1>
          <span className="loginsignup-fields">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </span>
          <span className='loginsignup-remember'>
            <input type="checkbox" />
            <label>Remember me</label>
            <a href="#">Forgot your password?</a>
          </span>
          <button className="login-button">Login</button>
          <p className="loginsignup-or">OR</p>
          <span className="social-login">
           
            <a href="#"><img src={google} /><i className="fab fa-google"></i></a>
          
          </span>
        </span>
      </span>
    <span className="loginsignup-right">
        <img src={loginImage} alt="Nature background" />
      </span>
    </div>
  );
};

export default LoginSignup;

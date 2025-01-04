import React, { useContext, useState, useEffect,useRef } from 'react';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import login_icon from '../Assests/login_icon.png';
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartItems } = useContext(ShopContext);
  const location = useLocation();
  
  // Update the menu state based on the current pathname
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/') {
      setMenu("Home");
    } else if (currentPath === '/Grocery') {
      setMenu("Grocery");
    } else if (currentPath === '/Electronics') {
      setMenu("Electronics");
    } else if (currentPath === '/Perfume') {
      setMenu("Perfume");
    } else if (currentPath === '/Makeup') {
      setMenu("Makeup");
    } else if (currentPath === '/Skincare') {
      setMenu("Skincare");
    } else if (currentPath === '/Fruits_Vegetables') {
      setMenu("Fruits_Vegetables");
    }
  }, [location]);

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <Link to="/">
            <p><b>LA</b></p>
            <img src={logo} alt="La Organic Store Logo" />
            <p><b>Organic Store</b></p>
          </Link>
        </div>
        <SearchBar />
        <div className="nav-login-cart">
          <Link to="/login">
            <img src={login_icon} alt="Login Icon" />
          </Link>
          <Link to="/cart">
            <img src={cart_icon} alt="Cart Icon" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>

      <div className="navbar-bottom">

        <ul className="nav-menu">
          <li><Link style={{ color: 'inherit', textDecoration: 'none' }} to="/" onClick={() => setMenu("Home")}>Home</Link>{menu === "Home" ? <hr /> : null}</li>
          <li><Link style={{ color: 'inherit', textDecoration: 'none' }} to="/Grocery" onClick={() => setMenu("Grocery")}>Grocery</Link>{menu === "Grocery" ? <hr /> : null}</li>
          <li><Link style={{ color: 'inherit', textDecoration: 'none' }} to="/Electronics" onClick={() => setMenu("Electronics")}>Electronics</Link>{menu === "Electronics" ? <hr /> : null}</li>
          <li><Link style={{ color: 'inherit', textDecoration: 'none' }} to="/Perfume" onClick={() => setMenu("Perfume")}>Perfume</Link>{menu === "Perfume" ? <hr /> : null}</li>
          <li><Link style={{ color: 'inherit', textDecoration: 'none' }} to="/Makeup" onClick={() => setMenu("Makeup")}>Makeup</Link>{menu === "Makeup" ? <hr /> : null}</li>
          <li><Link style={{ color: 'inherit', textDecoration: 'none' }} to="/Skincare" onClick={() => setMenu("Skincare")}>Skincare</Link>{menu === "Skincare" ? <hr /> : null}</li>
          <li><Link style={{ color: 'inherit', textDecoration: 'none' }} to="/Fruits_Vegetables" onClick={() => setMenu("Fruits_Vegetables")}>Fruits & Vegetables</Link>{menu === "Fruits_Vegetables" ? <hr /> : null}</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

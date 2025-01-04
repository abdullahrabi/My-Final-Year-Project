import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import edit_product_icon from '../../assets/Product_Cart.png'
import list_product_icon from '../../assets/list_product_icon.jpg'
const Sidebar = () => {
  return (
    <div className='sidebar'>
    <Link to={'/addproduct'} className='Link'>
    <div className='sidebar-item'>
        <img src={edit_product_icon} alt="" />
        <p>Add Product</p>
    </div>
    </Link>
    <Link to={'/listproduct'} className='Link'>
    <div className='sidebar-item'>
        <img src={list_product_icon} alt="" />
        <p>Product List</p>
    </div>
    </Link>
    </div>
  )
}

export default Sidebar
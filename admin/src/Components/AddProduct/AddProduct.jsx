import React, { useState } from 'react'
import './AddProduct.css'
import upload_icon from '../../assets/upload icon.png'

const AddProduct = () => {
  const [image, setImage] = useState (false);
  const imageHandler =(e)=>{
      setImage(e.target.files[0]);
  }
  return (
    <div className='add-product'> 
      <div className='addproduct-itemfield'>
        <p>Product Title</p>
        <input type="text" name='name' placeholder='Type here'/>
      </div>

      <div className='addproduct-price'>
        <div className='addproduct-itemfield'>
          <p>Price</p>
          <input type="text" name='old_price' />
        </div>
        <div className='addproduct-itemfield'>
          <p>Offer Price</p>
          <input type="text" name='new_price' />
        </div>
      </div>

      <div className='addproduct-itemfield'>
        <p>Product Category</p>
        <select name='category' className='add-product-selector'>
          {/* Corrected to use string values */}
          <option value='Grocery'>Grocery</option>
          <option value='Electronics'>Electronics</option>
          <option value='Perfume'>Perfume</option>
          <option value='Makeup'>Makeup</option>
          <option value='Skincare'>Skincare</option>
          <option value='Fruits_Vegetables'>Fruits & Vegetables</option>
        </select>
      </div>

      <div className='addproduct-itemfield'>
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_icon} alt="Upload Icon" className='addproduct-thumnail-img' />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>

      <button className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct

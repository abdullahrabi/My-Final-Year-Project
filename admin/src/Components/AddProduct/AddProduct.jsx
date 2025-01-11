import React, { useState } from 'react';
import './AddProduct.css';
import upload_icon from '../../assets/upload icon.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "Grocery",
    new_price: "",
    old_price: "",
  });

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const Add_Product = async () => {
    let product = productDetails;
    let formData = new FormData();
    formData.append('product', image);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.success) {
        product.image = responseData.image_url;

        // API request to add product details
        const addProductResponse = await fetch('http://localhost:5000/addproduct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });

        const addProductData = await addProductResponse.json();

        if (addProductData.success) {
          toast.success('Product added successfully!');
        } else {
          toast.error('Failed to add the product.');
        }
      } else {
        toast.error('Image upload failed.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className='add-product'>
      <ToastContainer />
      <div className='addproduct-itemfield'>
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>

      <div className='addproduct-price'>
        <div className='addproduct-itemfield'>
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
          />
        </div>
        <div className='addproduct-itemfield'>
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
          />
        </div>
      </div>

      <div className='addproduct-itemfield'>
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className='add-product-selector'
        >
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
          <img
            src={image ? URL.createObjectURL(image) : upload_icon}
            alt="Upload Icon"
            className='addproduct-thumnail-img'
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>

      <button onClick={Add_Product} className='addproduct-btn'>ADD</button>
    </div>
  );
};

export default AddProduct;

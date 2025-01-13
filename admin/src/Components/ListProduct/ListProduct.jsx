import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import remove_icon from '../../assets/remove_icon.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [error, setError] = useState(null); // State to store errors

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:5000/allproducts');
      
      // Check if the response is ok (status code 200-299)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      // Check if data is an array
      if (Array.isArray(data)) {
        setAllProducts(data);
      } else {
        throw new Error("Data format is incorrect");
      }
    } catch (err) {
      setError(err.message); // Set error message if there's an error
      console.error(err);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  const remove_product = async (id) => {
    if (!id) {
      toast.error('Product ID is missing!');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:5000/removeproduct/${id}`, {
        method: 'POST',
      });
  
      if (!response.ok) {
        throw new Error('Error removing product');
      }
  
      toast.success('Product removed successfully!');
      await fetchInfo(); // Refresh the product list
    } catch (err) {
      toast.error('Error removing product: ' + err.message);
    }
  };
  
  

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      {error && <p className="error-message">Error: {error}</p>} {/* Display error message if any */}
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.length > 0 ? (
          allproducts.map((product, index) => (
            <><div key={index} className="listproduct-format-main listproduct-format">
              <img src={product.image} alt="" className="listproduct-product-icon" />
              <p>{product.name}</p>
              <p>RS {product.old_price}</p>
              <p>RS {product.new_price}</p>
              <p>{product.category}</p>
              <img 
                onClick={()=>remove_product(product.id)} 
                src={remove_icon} 
                alt="remove" 
                className="listproduct-remove-icon" 
              />
            </div>
            <hr /></>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      
      {/* ToastContainer component for showing the toast messages */}
      <ToastContainer />
    </div>
  );
};

export default ListProduct;

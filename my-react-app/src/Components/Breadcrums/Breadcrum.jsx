import React from 'react';
import { Link } from 'react-router-dom';
import arrow_icon from '../Assests/breadcrum_icon.png';
import './Breadcrum.css';

const Breadcrum = (props) => {
    const { product } = props;

    return (
        <div className='breadcrum'>
            {/* Home Link */}
            <Link to="/">Home</Link>
            <img src={arrow_icon} alt="arrow" />

            {/* Category Link */}
            {product.category && (
                <>
                    {product.category === 'Grocery' && <Link to="/Grocery">Grocery</Link>}
                    {product.category === 'Electronics' && <Link to="/Electronics">Electronics</Link>}
                    {product.category === 'Perfume' && <Link to="/Perfume">Perfume</Link>}
                    {product.category === 'Makeup' && <Link to="/Makeup">Makeup</Link>}
                    {product.category === 'Skincare' && <Link to="/Skincare">Skincare</Link>}
                    {product.category === 'Fruits_Vegetables' && <Link to="/Fruits_Vegetables">Fruits & Vegetables</Link>}
                    <img src={arrow_icon} alt="arrow" />
                </>
            )}

            {/* Product Link */}
            {product.name && (
                <Link to={`/product/${product.id}`}>{product.name}</Link>
            )}
        </div>
    );
};

export default Breadcrum;

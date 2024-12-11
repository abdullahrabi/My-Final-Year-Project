import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    <div className='item'>
      {/* Adding onClick event to the Link itself */}
      <Link to={`/product/${props.id}`} >
        <img src={props.image} alt={props.name} onClick={scrollToTop} />
      </Link>
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>
          RS {props.new_price}
        </div>
        <div className='item-price-old'>
          RS {props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;

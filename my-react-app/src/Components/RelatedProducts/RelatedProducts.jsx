import React from 'react';
import './RelatedProducts.css';
import all_product from '../Assests/data/all_product';
import Item from '../Item/Item';

const RelatedProducts = ({ category, selectedProductId }) => {
  // Filter by category and exclude the currently selected product
  const relatedProducts = all_product.filter(
    (item) => item.category === category && item.id !== selectedProductId
  );

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className='relatedproducts-items'>
        {relatedProducts.length > 0 ? (
          relatedProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;

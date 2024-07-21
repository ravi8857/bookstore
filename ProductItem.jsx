// frontend/src/components/ProductItem.js    new

import React from 'react';
import AddToCartButton from './AddToCartButton';

const ProductItem = ({ product, userId }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <AddToCartButton userId={userId} productId={product.id} />
    </div>
  );
};

export default ProductItem;

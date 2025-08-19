import React from 'react';

type Props = {
  title: string;
  image: string;
};

const ProductCard: React.FC<Props> = ({ title, image }) => (
  <div className="product-card">
    <img
      src={image}
      alt={title}
      className="product-image"
    />
    <h3>{title}</h3>
   
  </div>
);

export default ProductCard;

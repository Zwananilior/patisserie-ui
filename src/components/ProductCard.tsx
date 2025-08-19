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
    <p>Sample description of this amazing product.</p>
    <button className="card-button">ORDER TODAY</button>
  </div>
);

export default ProductCard;

import React from 'react';

type Props = {
  title: string;
  image: string;
  button: string;
};

const CollectionCard: React.FC<Props> = ({ title, image }) => (
  <div className="collection-card">
    <img src={image} alt={title} className="collection-image" />
    
  </div>
);

export default CollectionCard;


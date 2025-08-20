import React from 'react';
import './Card.css'; // Assuming you have a CSS file for styling

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <div className="card-container"> {/* Main card container */}
      <img src={imageUrl} alt={title} className="card-image" /> {/* Product image */}
      <div className="card-content"> {/* Card content section */}
        <h2 className="card-title">{title}</h2> {/* Product title */}
        <p className="card-description">{description}</p> {/* Product description */}
        <span className="card-price">{price}</span> {/* Product price */}
      </div>
    </div>
  );
};

export default Card; // Default export for the Card component
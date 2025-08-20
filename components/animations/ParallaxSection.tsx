import React from 'react';
import './ParallaxSection.css'; // Importing CSS for styles

const ParallaxSection: React.FC = () => {
  return (
    <div className="parallax-container">
      <div className="parallax-background"></div>
      <div className="parallax-content">
        <h1 className="headline">Elevate Your Beauty</h1>
        <p className="subheadline">Discover the luxury of GlamCS cosmetics</p>
      </div>
    </div>
  );
};

export default ParallaxSection;
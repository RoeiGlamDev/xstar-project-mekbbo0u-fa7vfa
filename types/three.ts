import React from 'react';

interface ThreeTypesProps {
  title: string;
  description: string;
}

const ThreeTypes: React.FC<ThreeTypesProps> = ({ title, description }) => {
  return (
    <div className="three-types-container" style={{ backgroundColor: 'white', color: 'orange' }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="types-grid">
        <div className="type-item" style={{ border: '1px solid orange', borderRadius: '10px', padding: '20px' }}>
          <h3>Type 1</h3>
          <p>Luxury 3D design effect 1</p>
        </div>
        <div className="type-item" style={{ border: '1px solid orange', borderRadius: '10px', padding: '20px' }}>
          <h3>Type 2</h3>
          <p>Luxury 3D design effect 2</p>
        </div>
        <div className="type-item" style={{ border: '1px solid orange', borderRadius: '10px', padding: '20px' }}>
          <h3>Type 3</h3>
          <p>Luxury 3D design effect 3</p>
        </div>
      </div>
    </div>
  );
};

export default ThreeTypes;
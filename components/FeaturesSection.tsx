import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const featuresData = [
  {
    title: 'Luxurious Formulations',
    description: 'Experience the elegance of our premium ingredients that nourish and enhance your beauty.',
    icon: '💄', // Example icon
  },
  {
    title: '3D Packaging Design',
    description: 'Our products come in stunning 3D designs that reflect sophistication and style.',
    icon: '📦', // Example icon
  },
  {
    title: 'Cruelty-Free Promise',
    description: 'We are committed to providing high-quality cosmetics that are never tested on animals.',
    icon: '🐰', // Example icon
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Features</h2>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <span className="feature-icon">{feature.icon}</span>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
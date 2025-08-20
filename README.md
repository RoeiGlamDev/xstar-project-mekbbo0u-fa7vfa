import React from 'react';

const README: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1 style={{ color: '#FF7F50' }}>GlamCS Cosmetics Website</h1>
      <p>Welcome to the GlamCS project! This website is designed to showcase high-end cosmetics with an elegant touch.</p>
      
      <h2>Design Overview</h2>
      <p>The website features a luxurious design with:</p>
      <ul>
        <li>Color Scheme: Orange and White</li>
        <li>3D Designs and Effects</li>
        <li>Responsive Layout for All Devices</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To get started with the GlamCS project, follow these steps:</p>
      <ol>
        <li>Clone the repository: <code>git clone <repository-url></code></li>
        <li>Navigate to the project directory: <code>cd glamcs</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Start the development server: <code>npm start</code></li>
      </ol>

      <h2>Technologies Used</h2>
      <p>This project utilizes the following technologies:</p>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>CSS Modules</li>
        <li>3D Rendering Libraries</li>
      </ul>

      <h2>Contributing</h2>
      <p>We welcome contributions! Please fork the repository and submit a pull request.</p>

      <h2>License</h2>
      <p>This project is licensed under the MIT License.</p>
    </div>
  );
};

export default README;
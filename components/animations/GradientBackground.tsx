import React from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const GradientBackgroundStyled = styled.div`
  height: 100vh; // Full height
  width: 100%; // Full width
  background: linear-gradient(270deg, #FF7F50, #FFFFFF); // Orange to white gradient
  background-size: 400% 400%; // For smooth animation
  animation: ${gradientAnimation} 15s ease infinite; // Animation properties
`;

const GradientBackground: React.FC = ({ children }) => {
  return <GradientBackgroundStyled>{children}</GradientBackgroundStyled>; // Render children
};

export default GradientBackground;
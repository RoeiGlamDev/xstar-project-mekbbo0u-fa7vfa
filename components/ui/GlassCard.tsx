import React from 'react';
import styled from 'styled-components';

const GlassCardContainer = styled.div`
  background: rgba(255, 255, 255, 0.1); // semi-transparent background
  border-radius: 15px; // rounded corners
  backdrop-filter: blur(10px); // glass effect
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); // subtle shadow for depth
  padding: 20px;
  color: #fff; // text color
  transition: transform 0.3s; // smooth hover effect

  &:hover {
    transform: translateY(-5px); // lift effect on hover
  }
`;

const GlassCardTitle = styled.h2`
  font-size: 24px; // title font size
  margin-bottom: 10px;
  color: orange; // title color
`;

const GlassCardContent = styled.p`
  font-size: 16px; // content font size
  line-height: 1.5; // line height for readability
`;

const GlassCard: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <GlassCardContainer>
      <GlassCardTitle>{title}</GlassCardTitle>
      <GlassCardContent>{content}</GlassCardContent>
    </GlassCardContainer>
  );
};

export default GlassCard;
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background-color: #f0f0f0;
  padding: 4rem 2rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Ei Thazin Htay</HeroTitle>
      <HeroSubtitle>Software Engineer</HeroSubtitle>
    </HeroContainer>
  );
};

export default Hero;
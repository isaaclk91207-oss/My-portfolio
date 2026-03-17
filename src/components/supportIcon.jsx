import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff; /* Primary color */
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  z-index: 1000; /* Ensure it's on top of other content */
`;

const SupportIcon = ({ onClick }) => {
  return <IconContainer onClick={onClick}>?</IconContainer>;
};

export default SupportIcon;
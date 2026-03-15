import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './page/homepage';

const Header = styled.header`
  background-color: #333;
  color: white;
padding: 1rem 0;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function App() {
  return (
    <Router>
      <Header>
        <h1>My Portfolio</h1>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          {/* Add more links to other pages if you create them */}
        </Nav>
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add routes for other pages here */}
      </Routes>
    </Router>
  );
}

export default App;
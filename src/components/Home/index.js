import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, Nav, NavList, NavItem, Heading } from './styledComponents';

const Home = () => {
  return (
    <HomeContainer>
      <Nav>
        <NavList>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/add-book">Add Book</Link></NavItem>
          <NavItem><Link to="/about">About</Link></NavItem>
          <NavItem><Link to="/contact">Contact</Link></NavItem>
        </NavList>
      </Nav>
      <Heading>Welcome to the Online Book Inventory</Heading>
    </HomeContainer>
  );
};

export default Home;

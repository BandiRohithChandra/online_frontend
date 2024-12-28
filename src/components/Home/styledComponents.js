import styled from 'styled-components';

export const HomeContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f4f4f4;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  background-color: #333;
  width: 100%;
  padding: 10px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin: 0 20px;
  font-size: 16px;

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    
    &:hover {
      color: #f1f1f1;
    }
  }
`;

export const Heading = styled.h1`
  font-size: 32px;
  color: #333;
  text-align: center;
  margin-top: 50px;
`;

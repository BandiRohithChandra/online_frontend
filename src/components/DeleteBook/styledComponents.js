import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Heading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #c0392b;
  }
`;

export const CancelButton = styled.button`
  padding: 10px;
  background-color: #95a5a6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #7f8c8d;
  }
`;

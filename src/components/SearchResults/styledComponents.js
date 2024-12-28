import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

export const BookItem = styled.li`
  margin-bottom: 20px;
`;

export const BookDetails = styled.div`
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 4px;
`;



export const PaginationButton = styled.button`
  padding: 10px;
  background-color: #34495e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2c3e50;
  }
`;

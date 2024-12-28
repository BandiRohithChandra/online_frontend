import styled from 'styled-components';

export const ContactContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f4f4f4;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 32px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  text-align: center;
  margin: 10px 0;
  width: 80%;
`;

export const ContactInfo = styled.div`
  font-size: 18px;
  color: #333;
  line-height: 1.6;
  text-align: center;

  p {
    margin: 5px 0;
  }
`;

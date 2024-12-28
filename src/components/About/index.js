import React from 'react';
import { AboutContainer, Heading, Paragraph } from './styledComponents';

const About = () => {
  return (
    <AboutContainer>
      <Heading>About Us</Heading>
      <Paragraph>
        Welcome to the Online Book Inventory System. This platform allows users to easily manage their books, 
        keep track of inventory, and add new books to the collection. Whether you're an avid reader, a library manager, 
        or just someone looking to organize your bookshelf, our system is here to help you!
      </Paragraph>
      <Paragraph>
        Our mission is to provide an easy-to-use, efficient platform for book inventory management. We believe in the 
        power of reading and aim to make book management accessible for everyone.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;

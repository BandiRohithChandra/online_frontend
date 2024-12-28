import React from 'react';
import { ContactContainer, Heading, Paragraph, ContactInfo } from './styledComponents';

const Contact = () => {
  return (
    <ContactContainer>
      <Heading>Contact Us</Heading>
      <Paragraph>
        We'd love to hear from you! If you have any questions, feedback, or suggestions, feel free to reach out to us.
      </Paragraph>
      <ContactInfo>
        <p>Email: support@bookinventory.com</p>
        <p>Phone: +1 (800) 123-4567</p>
        <p>Address: 123 Book Lane, Bibliopolis, BL 56789</p>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;

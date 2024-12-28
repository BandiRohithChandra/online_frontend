import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Heading, Button, CancelButton } from './styledComponents';

const DeleteBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/books/${id}`);
        setBook(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBook();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      alert('Book deleted successfully!');
      navigate('/');
    } catch (err) {
      console.error('Error deleting book', err);
      alert('Error deleting book');
    }
  };
  
  

  if (!book) return <div>Loading...</div>;

  return (
    <Container>
      <Heading>Are you sure you want to delete this book?</Heading>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <Button onClick={handleDelete}>Delete</Button>
      <CancelButton onClick={() => navigate('/')}>Cancel</CancelButton>
    </Container>
  );
};

export default DeleteBook;

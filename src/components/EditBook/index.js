import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Heading, Form, Input, Button } from './styledComponents';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const bookResponse = await axios.get(`/books/${id}`);
        setBook(bookResponse.data);
        const authorsResponse = await axios.get('/authors');
        const genresResponse = await axios.get('/genres');
        setAuthors(authorsResponse.data);
        setGenres(genresResponse.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBookData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedBook = {
        ...book,
        authorid: parseInt(book.authorid),
        genreid: parseInt(book.genreid),
      };
      await axios.put(`http://localhost:3000/books/${id}`, updatedBook);
      alert('Book updated successfully!');
      navigate('/');
    } catch (err) {
      console.error('Error updating book', err);
      alert('Error updating book');
    }
  };

  if (!book) return <div>Loading...</div>;

  return (
    <Container>
      <Heading>Edit Book</Heading>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
        />
        <select
          value={book.authorid}
          onChange={(e) => setBook({ ...book, authorid: e.target.value })}
        >
          <option value="">Select Author</option>
          {authors.map((a) => (
            <option key={a.id} value={a.id}>
              {a.name}
            </option>
          ))}
        </select>
        <select
          value={book.genreid}
          onChange={(e) => setBook({ ...book, genreid: e.target.value })}
        >
          <option value="">Select Genre</option>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
        <Input
          type="number"
          value={book.pages}
          onChange={(e) => setBook({ ...book, pages: e.target.value })}
        />
        <Input
          type="date"
          value={book.publishedDate}
          onChange={(e) => setBook({ ...book, publishedDate: e.target.value })}
        />
        <Button type="submit">Update Book</Button>
      </Form>
    </Container>
  );
};

export default EditBook;

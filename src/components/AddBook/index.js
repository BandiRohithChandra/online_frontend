import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Heading, Form, Input, Button } from './styledComponents';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [pages, setPages] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authorsResponse = await axios.get('http://localhost:5000/authors');
        const genresResponse = await axios.get('http://localhost:5000/genres');
        setAuthors(authorsResponse.data);
        setGenres(genresResponse.data);
      } catch (err) {
        console.error('Error fetching authors or genres', err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = {
      title,
      authorid: parseInt(author), // Use the author's ID
      genreid: parseInt(genre),   // Use the genre's ID
      pages,
      publishedDate,
    };

    try {
      const response = await axios.post('/books', newBook);
      alert(`Book added successfully with ID: ${response.data.bookid}`);
    } catch (err) {
      console.error('Error adding book', err);
      alert('Error adding book');
    }
  };

  return (
    <Container>
      <Heading>Add a New Book</Heading>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select value={author} onChange={(e) => setAuthor(e.target.value)} required>
          <option value="">Select Author</option>
          {authors.map((a) => (
            <option key={a.authorid} value={a.authorid}>
              {a.name}
            </option>
          ))}
        </select>
        <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
          <option value="">Select Genre</option>
          {genres.map((g) => (
            <option key={g.genreid} value={g.genreid}>
              {g.name}
            </option>
          ))}
        </select>
        <Input
          type="number"
          placeholder="Pages"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          required
        />
        <Input
          type="date"
          placeholder="Published Date"
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
          required
        />
        <Button type="submit">Add Book</Button>
      </Form>
    </Container>
  );
};

export default AddBook;

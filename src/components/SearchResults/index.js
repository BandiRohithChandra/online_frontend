import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Input, Button, BookItem, BookDetails, PaginationButton } from './styledComponents';

const SearchResults = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching books from backend...");
        const booksResponse = await axios.get('http://localhost:5000/books', { params: { page: 1, limit: 5 } });
        console.log(booksResponse.data);
        const authorsResponse = await axios.get('http://localhost:5000/authors');
        const genresResponse = await axios.get('http://localhost:5000/genres');
        setBooks(booksResponse.data);
        setAuthors(authorsResponse.data);
        setGenres(genresResponse.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [currentPage]);


  const handleSearch = () => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
    setCurrentPage(1); // Reset page to 1 when a new search is made
  };


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const displayBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search by title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
      <ul>
        {displayBooks.map((book) => {
          const author = authors.find((a) => a.authorid === book.authorid);
          const genre = genres.find((g) => g.genreid === book.genreid);

          return (
            <BookItem key={book.bookid}>
              <BookDetails>
                <h3>{book.title}</h3>
                <p>{author ? author.name : 'Unknown Author'}</p>
                <p>{genre ? genre.name : 'Unknown Genre'}</p>
                <p>{book.pages} pages</p>
                <p>{book.publishedDate}</p>
                <Link to={`/edit-book/${book.bookid}`}>Edit</Link>
                <Link to={`/delete-book/${book.bookid}`}>Delete</Link>
              </BookDetails>
            </BookItem>
          );
        })}
      </ul>
      <div>
        {currentPage > 1 && (
          <PaginationButton onClick={() => handlePageChange(currentPage - 1)}>Prev</PaginationButton>
        )}
        {currentPage < Math.ceil(books.length / booksPerPage) && (
          <PaginationButton onClick={() => handlePageChange(currentPage + 1)}>Next</PaginationButton>
        )}
      </div>
    </Container>
  );
};

export default SearchResults;

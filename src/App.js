import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import About from './components/About';
import Contact from './components/Contact';
import SearchResults from './components/SearchResults';
import EditBook from './components/EditBook';
import DeleteBook from './components/DeleteBook';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
        <Route path="/delete-book/:id" element={<DeleteBook />} />
      </Routes>
    </Router>
  )}

  export default App
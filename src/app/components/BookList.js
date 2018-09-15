import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from './BookListItem';

const BookList = ({ books, checkoutBook }) => (
  <ul>
    {books.map(book => (
      <BookListItem
        key={book.id}
        {...book}
        onClick={() => checkoutBook(book.id)}
      />
    ))}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      checkedOutBy: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  checkoutBook: PropTypes.func.isRequired,
};

export default BookList;

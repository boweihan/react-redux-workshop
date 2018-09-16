import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from './BookListItem';

const style = {
  list: {
    flex: 1,
    listStyle: 'none',
    paddingLeft: 0,
  },
};

const BookList = ({ books, checkoutBook }) => (
  <ul style={style.list}>
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

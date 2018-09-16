import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from './BookListItem';
import ListHeading from './ListHeading';

const style = {
  container: {
    flex: 1,
    padding: 10,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
};

const BookList = ({
  heading,
  books,
  selectedUser,
  checkoutBook,
  checkinBook,
}) => (
  <div style={style.container}>
    <ListHeading text={heading} />
    <ul style={style.list}>
      {books.map(book => (
        <BookListItem
          key={book.id}
          {...book}
          checkout={checkoutBook && (() => checkoutBook(book, selectedUser))}
          checkin={checkinBook && (() => checkinBook(book))}
        />
      ))}
    </ul>
  </div>
);

BookList.propTypes = {
  heading: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      checkedOutBy: PropTypes.obj,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selectedUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  checkoutBook: PropTypes.func,
  checkinBook: PropTypes.func,
};

export default BookList;

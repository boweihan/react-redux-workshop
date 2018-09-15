import React from 'react';
import PropTypes from 'prop-types';

const BookListItem = ({ onClick, checkedOutBy, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: checkedOutBy ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

BookListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  checkedOutBy: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default BookListItem;

import React from 'react';
import PropTypes from 'prop-types';

const style = {
  listItem: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    fontFamily: 'Open Sans',
    margin: '2px 0',
  },
};

const BookListItem = ({ onClick, checkedOutBy, text }) => (
  <li
    onClick={onClick}
    className="list_item"
    style={{
      ...style.listItem,
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

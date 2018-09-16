import React from 'react';
import PropTypes from 'prop-types';
import CheckoutButton from './CheckoutButton';

const styles = {
  listItem: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    fontFamily: 'Open Sans',
    margin: '2px 0',
  },
};

const BookListItem = ({ onClick, checkedOutBy, text }) => (
  <li
    className="list_item"
    style={{
      ...styles.listItem,
      textDecoration: checkedOutBy ? 'line-through' : 'none',
    }}
  >
    {text}
    <CheckoutButton onClick={onClick} />
  </li>
);

BookListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  checkedOutBy: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default BookListItem;

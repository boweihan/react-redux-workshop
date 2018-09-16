import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  listItem: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    fontFamily: 'Open Sans',
    margin: '2px 0',
  },
};

const BookListItem = ({ checkedOutBy, text }) => (
  <li className="list_item" style={styles.listItem}>
    {text}
  </li>
);

BookListItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  checkedOutBy: PropTypes.object,
};

export default BookListItem;

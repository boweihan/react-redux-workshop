import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  listItem: {
    padding: 10,
    backgroundColor: '#f2f2f2',
    fontFamily: 'Open Sans',
    margin: '2px 0',
  },
  text: {
    fontSize: 14,
  },
};

const BookListItem = ({
  checkedOutBy,
  title,
  // TODO: support check-out
  // TODO: support check-in
}) => (
  <li className="list_item" style={styles.listItem}>
    <span style={styles.text}>{title}</span>
  </li>
);

BookListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  checkedOutBy: PropTypes.object,
};

export default BookListItem;

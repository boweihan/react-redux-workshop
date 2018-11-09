import React from 'react';
import PropTypes from 'prop-types';
import CheckoutButton from './CheckoutButton';
import CheckinButton from './CheckinButton';

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
  checkOut,
  // TODO: support check-in
  checkIn,
}) => (
  <li className="list_item" style={styles.listItem}>
    <span style={styles.text}>{title}</span>
    {checkOut && <CheckoutButton onClick={checkOut} />}
    {checkIn && <CheckinButton onClick={checkIn} />}
  </li>
);

BookListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  checkedOutBy: PropTypes.object,
  checkOut: PropTypes.func,
  checkIn: PropTypes.func,
};

export default BookListItem;

import React from 'react';
import PropTypes from 'prop-types';
import CheckoutButton from './CheckoutButton';
import CheckinButton from './CheckinButton';

const styles = {
  listItem: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    fontFamily: 'Open Sans',
    margin: '2px 0',
  },
};

const BookListItem = ({ checkout, checkin, checkedOutBy, text }) => (
  <li className="list_item" style={styles.listItem}>
    {text}
    {checkout && <CheckoutButton onClick={checkout} />}
    {checkin && <CheckinButton onClick={checkin} />}
  </li>
);

BookListItem.propTypes = {
  checkout: PropTypes.func.isRequired,
  checkin: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  checkedOutBy: PropTypes.object,
};

export default BookListItem;

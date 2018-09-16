import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  header: {
    backgroundColor: '#424347',
    padding: 20,
    margin: 10,
    marginBottom: 0,
  },
  heading: {
    color: 'white',
    fontFamily: 'Open Sans',
    textAlign: 'center',
  },
};

const Header = ({ heading }) => (
  <div style={styles.header}>
    <h2 style={styles.heading}>{heading}</h2>
  </div>
);

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Header;

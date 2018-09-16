import React from 'react';

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

const Header = () => (
  <div style={styles.header}>
    <h2 style={styles.heading}>Vena Library</h2>
  </div>
);

export default Header;

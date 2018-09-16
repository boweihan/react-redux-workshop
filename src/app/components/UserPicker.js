import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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

const UserPicker = () => <Dropdown />;

export default UserPicker;

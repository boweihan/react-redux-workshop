import React from 'react';
import { Provider } from 'react-redux';
import BookPage from './BookPage';
import store from '../store';

const App = () => (
  <Provider store={store}>
    <BookPage />
  </Provider>
);

export default App;
// get users
// get books
// update checkout state of book
// waiting list with timer on checked out book

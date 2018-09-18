import { BOOKS_FETCH_SUCCESS } from '../actions';

const books = (state = {
  loading: true,
  list: []
}, action) => {
  switch (action.type) {
    case BOOKS_FETCH_SUCCESS:
      return {
        isLoading: false,
        list: action.payload
      };
    default:
      return state;
  }
};

// selectors
export const getBooksForUser = (books, user) => {
  return books.list.filter(book => {
    return book.checkedOutBy && book.checkedOutBy.id === user.id;
  });
};

export const getAvailableBooks = books => {
  return books.list.filter(book => {
    return !book.checkedOutBy;
  });
};

export const getCheckedOutBooks = (books, user) => {
  return books.list.filter(book => {
    return book.checkedOutBy && book.checkedOutBy.id !== user.id;
  });
};

export default books;

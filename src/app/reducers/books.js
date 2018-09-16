import Api from '../api';

const books = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_USERS_AND_BOOKS':
      return Api.getBooks();
    case 'CHECKOUT_BOOK':
      return [
        ...state,
        // implement
      ];
    default:
      return state;
  }
};

// selectors
export const getBooksForUser = (books, user) => {
  return books.filter(book => {
    return books.checkedOutBy && books.checkedOutBy.id === user.id;
  });
};

export const getAvailableBooks = books => {
  return books.filter(book => {
    return !books.checkedOutBy;
  });
};

export const getCheckedOutBooks = (books, user) => {
  return books.filter(book => {
    return books.checkedOutBy && books.checkedOutBy.id !== user.id;
  });
};

export default books;

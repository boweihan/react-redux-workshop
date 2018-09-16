import Api from '../api';

const books = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_USERS_AND_BOOKS':
      return Api.getBooks();
    default:
      return state;
  }
};

// selectors
export const getBooksForUser = (books, user) => {
  return books.filter(book => {
    return book.checkedOutBy && book.checkedOutBy.id === user.id;
  });
};

export const getAvailableBooks = books => {
  return books.filter(book => {
    return !book.checkedOutBy;
  });
};

export const getCheckedOutBooks = (books, user) => {
  return books.filter(book => {
    return book.checkedOutBy && book.checkedOutBy.id !== user.id;
  });
};

export default books;

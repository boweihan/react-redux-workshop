import Api from '../api';

const books = (state = [], action) => {
  let books, book;
  switch (action.type) {
    case 'LOAD_USERS_AND_BOOKS':
      return Api.getBooks();
    case 'CHECKOUT_BOOK':
      books = [...state];
      book = books.find(book => book.id === action.book.id);
      book.checkedOutBy = action.user;
      return books;
    case 'CHECKIN_BOOK':
      books = [...state];
      book = books.find(book => book.id === action.book.id);
      book.checkedOutBy = null;
      return books;
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

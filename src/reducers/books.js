import { BOOKS_FETCH_SUCCESS } from '../actions';

import { getCurrentCheckOuts } from './checkOuts';

const normalizeBookList = bookList => {
  const books = {};

  bookList.forEach(book => {
    books[book.id] = { ...book };
    delete books[book.id].id;
  });

  return books;
};

const books = (
  state = {
    isLoading: true,
    list: [],
    byId: {},
  },
  action,
) => {
  switch (action.type) {
    case BOOKS_FETCH_SUCCESS:
      return {
        isLoading: false,
        // Normalizing your state is an absolutely critical component of a good
        // redux store. Just like a database, there should be no repetition
        // in data. Here, because of the selectors that filter by check outs,
        // I need to be able to grab a book by id without iterating through
        // the entire list. There are much more robust ways to normalize an
        // entity's state based on API response. This is the quick and dirty
        // way. Note that the list still contains some dupicated data :)
        byId: normalizeBookList(action.payload),
        list: action.payload,
      };
    default:
      return state;
  }
};

const getBookById = (state, bookId) => {
  return {
    id: parseInt(bookId, 10),
    ...state.books.byId[bookId],
  };
};

// selectors
export const getAvailableBooks = state => {
  const ids = { ...state.books.byId };
  getCurrentCheckOuts(state).forEach(checkOut => delete ids[checkOut.bookId]);
  return Object.keys(ids).map(id => getBookById(state, id));
};

export const getBooksCheckedOutByCurrentUser = state => {
  return getCurrentCheckOuts(state)
    .filter(checkOut => checkOut.userId === state.users.selectedUserId)
    .map(checkOut => getBookById(state, checkOut.bookId));
};

export const getBooksCheckedOutByOtherUsers = state => {
  return getCurrentCheckOuts(state)
    .filter(checkOut => checkOut.userId !== state.users.selectedUserId)
    .map(checkOut => getBookById(state, checkOut.bookId));
};

export default books;

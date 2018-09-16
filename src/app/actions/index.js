export const loadUsersAndBooks = () => ({
  type: 'LOAD_USERS_AND_BOOKS',
});

export const selectUser = id => ({
  type: 'SELECT_USER',
  id,
});

export const checkoutBook = (book, user) => ({
  type: 'CHECKOUT_BOOK',
  book,
  user,
});

export const checkinBook = book => ({
  type: 'CHECKIN_BOOK',
  book,
});
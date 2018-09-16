export const loadUsersAndBooks = () => ({
  type: 'LOAD_USERS_AND_BOOKS',
});

export const selectUser = id => ({
  type: 'SELECT_USER',
  id,
});

export const checkoutBook = id => ({
  type: 'CHECKOUT_BOOK',
  id,
});

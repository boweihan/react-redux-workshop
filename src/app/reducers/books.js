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

export default books;

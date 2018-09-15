const books = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_BOOKS':
      return [
        ...state,
        // implement
      ];
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

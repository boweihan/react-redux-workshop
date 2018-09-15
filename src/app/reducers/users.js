const users = (
  state = {
    users: [],
    selectedUser: null,
  },
  action,
) => {
  switch (action.type) {
    case 'LOAD_USERS':
      return {
        ...state,
        // implement
      };
    case 'SELECT_USER':
      return {
        ...state,
        // implement
      };
    default:
      return state;
  }
};

export default users;

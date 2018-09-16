import Api from '../api';

const users = (
  state = {
    users: [],
    selectedUser: null,
  },
  action,
) => {
  switch (action.type) {
    case 'LOAD_USERS_AND_BOOKS':
      return {
        ...state,
        users: Api.getUsers(),
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

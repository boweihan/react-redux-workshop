import Api from '../api';

const users = (
  state = {
    list: [],
    selectedUser: null,
  },
  action,
) => {
  switch (action.type) {
    case 'LOAD_USERS_AND_BOOKS':
      return {
        ...state,
        list: Api.getUsers(),
      };
    case 'SELECT_USER':
      return {
        ...state,
        selectedUser: state.list.find(item => item.id === action.id),
      };
    default:
      return state;
  }
};

export default users;

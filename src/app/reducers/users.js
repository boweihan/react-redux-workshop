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
      const userList = Api.getUsers();
      return {
        ...state,
        list: userList,
        selectedUser: userList[0],
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

import { USERS_FETCH_SUCCESS } from '../actions';

const users = (
  state = {
    list: [],
    selectedUser: null,
    isLoading: true
  },
  action,
) => {
  switch (action.type) {
    case USERS_FETCH_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
        selectedUser: action.payload[0],
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

import { USERS_FETCH_SUCCESS } from '../actions';

const users = (
  state = {
    isLoading: true,
    list: [],
    // This property would live inside of a UI / pages reducer in
    // a real application. The reason it's set to a hard coded ID
    // is because it's referenced in books selectors, so we need to
    // avoid any race conditions in order of requests resolving. More
    // sophisticated loading logic would also solve this problem.
    selectedUserId: 1,
  },
  action,
) => {
  switch (action.type) {
    case USERS_FETCH_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    case 'SELECT_USER':
      return {
        ...state,
        selectedUserId: action.id,
      };
    default:
      return state;
  }
};

// selectors
export const getSelectedUser = state =>
  state.users.list.find(user => user.id === state.users.selectedUserId);

export default users;

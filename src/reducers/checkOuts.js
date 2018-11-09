import { CHECK_OUTS_FETCH_SUCCESS, CHECK_OUT_CREATE_SUCCESS } from '../actions';

const checkOuts = (
  state = {
    isLoading: true,
    list: [],
  },
  action,
) => {
  switch (action.type) {
    case CHECK_OUTS_FETCH_SUCCESS:
      return {
        isLoading: false,
        list: action.payload,
      };
    // TODO: implement check-out
    case CHECK_OUT_CREATE_SUCCESS:
      let list = [...state.list];
      list.push(action.payload);
      return {
        ...state,
        list,
      };
    // TODO: implement check-in
    default:
      return state;
  }
};

const isCheckedOut = checkOut => !checkOut.timestampIn;

// selectors

// The API returns all historical check outs, including those that
// have been checked in. Get currently active check outs only.
export const getCurrentCheckOuts = state => {
  return state.checkOuts.list.filter(isCheckedOut);
};

export default checkOuts;

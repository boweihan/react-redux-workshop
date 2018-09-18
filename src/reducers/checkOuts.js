import { CHECK_OUTS_FETCH_SUCCESS } from '../actions';

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

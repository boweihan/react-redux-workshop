import { RSAA } from 'redux-api-middleware';

import * as types from './types';

const HEADERS_BASE = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const API_URL_BASE = 'http://localhost:8000/';

/*
* Redux API Middleware (https://github.com/agraboso/redux-api-middleware)
* will intercept any action that contains the RSAA key, and instead dispatch
* some of the actions defined in the types property below, based on how
* the request resolves. It uses the new JavaScript Fetch API internally.
*/

export const fetchUsers = () => {
  return {
    [RSAA]: {
      endpoint: API_URL_BASE + 'users',
      method: 'GET',
      types: [
        types.USERS_FETCH_REQUEST,
        types.USERS_FETCH_SUCCESS,
        types.USERS_FETCH_FAILURE,
      ],
      headers: HEADERS_BASE,
    },
  };
};

/*
* This is more or less functionally equivalent with the commented out
* redux-api-middleware fetchBooks action defined below. There are many
* different ways to handle async actions in redux. redux-api-middleware is
* a nice abstraction (IMO ;) for AJAX requests, because they always have
* one initial action and two possible outcomes, among other similarities.
*
* Here, we are directly calling Fetch, while returning a function from our
* action creator. This returned function is intercepted by thunk middleware
* and called with an action dispatcher, allowing us to dispatch multiple
* actions in one method. The way you decide to control dispatching these
* actions (Promise, Observable, timeout, etc.) is completely up to you.
*/

export const fetchBooks = () => dispatch => {
  // Generic error handling for Fetch requests.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  fetch(API_URL_BASE + 'books')
    .then(handleErrors)
    .then(response => response.json())
    .then(jsonResponse =>
      dispatch({
        type: types.BOOKS_FETCH_SUCCESS,
        payload: jsonResponse,
      }),
    )
    // The error signature here is not exactly the same as RSAA, which has
    // specific error handling semantics. If you're interested, you can
    // read more about their error handling philosohpy and implementation
    // here: https://github.com/redux-utilities/flux-standard-action
    // This is not important for this example.
    .catch(error =>
      dispatch({
        type: types.BOOKS_FETCH_FAILURE,
        error: error,
      }),
    );

  return dispatch({
    type: types.BOOKS_FETCH_REQUEST,
  });
};

// export const fetchBooks = () => {
//   return {
//     [RSAA]: {
//       endpoint: API_URL_BASE + 'books',
//       method: 'GET',
//       types: [
//         types.BOOKS_FETCH_REQUEST,
//         types.BOOKS_FETCH_SUCCESS,
//         types.BOOKS_FETCH_FAILURE,
//       ],
//       headers: HEADERS_BASE,
//     },
//   };
// };

export const fetchCheckOuts = () => {
  return {
    [RSAA]: {
      endpoint: API_URL_BASE + 'checkOuts',
      method: 'GET',
      types: [
        types.CHECK_OUTS_FETCH_REQUEST,
        types.CHECK_OUTS_FETCH_SUCCESS,
        types.CHECK_OUTS_FETCH_FAILURE,
      ],
      headers: HEADERS_BASE,
    },
  };
};

// TODO: implement check-out actions

/*** SAMPLE REQUEST ***
  @PATCH - http://localhost:8000/checkOuts/14

  BODY
  {"dueInDays":0,"timestampOut":null,"timestampIn":1541786644576}

  RESPONSE: 200
  {
    "userId": 1,
    "bookId": 5,
    "dueInDays": 0,
    "timestampOut": null,
    "timestampIn": 1541786644576,
    "id": 14
  }
*/

// TODO: implement check-in actions

/*** SAMPLE REQUEST ***
  @POST - http://localhost:8000/checkOuts

  BODY
  {"userId":1,"bookId":1,"dueInDays":7,"timestampOut":1541786756800,"timestampIn":null}

  RESPONSE: 200
  {
    "userId": 1,
    "bookId": 1,
    "dueInDays": 7,
    "timestampOut": 1541786756800,
    "timestampIn": null,
    "id": 15
  }
*/

import { RSAA } from 'redux-api-middleware';

import * as types from './types';

const HEADERS_BASE = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const API_URL_BASE = 'http://localhost:8000/';

export const fetchBooks = () => {
  return {
    [RSAA]: {
      endpoint: API_URL_BASE + 'books',
      method: 'GET',
      types: [
        types.BOOKS_FETCH_REQUEST,
        types.BOOKS_FETCH_SUCCESS,
        types.BOOKS_FETCH_FAILURE,
      ],
      headers: HEADERS_BASE,
    },
  };
};

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

import * as types from './types';

export * from './api';
export * from './types';

export const selectUser = id => ({
  type: types.SELECT_USER,
  id,
});

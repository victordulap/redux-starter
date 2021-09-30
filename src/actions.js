import * as actions from './actionTypes';

export const addBug = (description) => ({
  type: actions.ADD_BUG,
  payload: {
    description,
  },
});

export const resolveBug = (id) => ({
  type: actions.RESOLVE_BUG,
  payload: {
    id,
  },
});

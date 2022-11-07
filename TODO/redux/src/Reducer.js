import {ADD, DELETE} from './ActionTypes';

const initialState = 'shoaib';

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {...state, state};
    case DELETE:
      return {...state, state};
    default:
      return state;
  }
};

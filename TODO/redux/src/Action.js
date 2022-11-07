import {ADD, DELETE} from './ActionTypes';

export const addTask = (task) => ({
  type: ADD,
});
export const deleteTask = (task) => ({
  type: DELETE,
});

import {INCREMENT, DECREMENT, RESET} from './ActionTypes';

export const counterIncrement = () => ({
  type: INCREMENT,
});

export const counterDecrement = () => ({
  type: DECREMENT,
});

export const counterReset = () => ({
  type: RESET,
});

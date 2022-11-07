import {createStore} from 'redux';
import {taskReducer} from './Reducer';
//  export const store = createStore(mainReducer);

import {combineReducers} from 'redux';
export default combineReducers({
  taskReducer,
});


